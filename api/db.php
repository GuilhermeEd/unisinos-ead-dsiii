<?php

define("DBHOST","localhost");
define("DBUSER","nuny");
define("DBPASS","sabbath");
define("DBNAME","ds3");
define("CHARSET","utf8");


class Singleton { 
	private static $instance = null;

	protected function __construct() { }

        protected function __clone() { }

        public function __wakeup() {
                throw new Exception("Cannot unserialize singleton");
        }

	public static function getInstance() {
		if (!isset(self::$instance)) {
			self::$instance = new static;
		}
		return self::$instance;
	}
}


class Database extends Singleton {

	private $connection;
	private $query;
	private $query_count = 0;
	
	protected function __construct() { 
			//persistent connection to survive multiple HTTP requests
		$this->connection = new mysqli("p:" . DBHOST, DBUSER, DBPASS, DBNAME);
		if ($this->connection->connect_error) {
			error_log('Failed to connect to MySQL - ' . $this->connection->connect_error);
			throw new Exception($this->connection->connect_error);
		}
		$this->connection->set_charset(CHARSET);
	}
	
	public function query($query) {
		if ($this->query = $this->connection->prepare($query)) {
	        	if (func_num_args() > 1) {
				$x = func_get_args();
				$args = array_slice($x, 1);
				$types = '';
		                $args_ref = array();
                		foreach ($args as $k => &$arg) {
					if (is_array($args[$k])) {
						foreach ($args[$k] as $j => &$a) {
							$types .= $this->_gettype($args[$k][$j]);
							$args_ref[] = &$a;
						}
					} else {
	                			$types .= $this->_gettype($args[$k]);
				                $args_ref[] = &$arg;
					}
                		}
				array_unshift($args_ref, $types);
		                call_user_func_array(array($this->query, 'bind_param'), $args_ref);
            		}
		        $this->query->execute();
        	   	if ($this->query->errno) {
				error_log('Unable to process MySQL query (check your params) - ' . $this->query->error);
	           	}
			$this->query_count++;
	        } else {
        	    error_log('Unable to prepare statement (check your syntax) - ' . $this->connection->error);
	        }
		return $this;
    	}

	public function fetchAll() {
	    $params = array();
	    $meta = $this->query->result_metadata();
	
	    while ($field = $meta->fetch_field()) {
	        $params[] = &$row[$field->name];
	    }
	
	    call_user_func_array(array($this->query, 'bind_result'), $params);
            $result = array();
	    
	    while ($this->query->fetch()) {
            	$r = array();
	        foreach ($row as $key => $val) {
                	$r[$key] = $val;
		}
    		$result[] = $r;
    	    }
            
	    $this->query->close();
	    return $result;
	}

	public function fetchArray() {
	    $params = array();
	    $meta = $this->query->result_metadata();
	    while ($field = $meta->fetch_field()) {
	        $params[] = &$row[$field->name];
	    }
	    call_user_func_array(array($this->query, 'bind_result'), $params);
            $result = array();
            while ($this->query->fetch()) {
		foreach ($row as $key => $val) {
			$result[$key] = $val;
		}
	    }
    
    	    $this->query->close();
            return $result;
	}
	
	public function numRows() {
		$this->query->store_result();
		return $this->query->num_rows;
	}

	public function affectedRows() {
		return $this->query->affected_rows;
	}

	private function _gettype($var) {
	    if(is_string($var)) return 's';
	    if(is_float($var)) return 'd';
	    if(is_int($var)) return 'i';
	    return 'b';
	}


}
?>
