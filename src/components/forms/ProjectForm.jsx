import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, withFormik } from 'formik';
import { Spin, Form } from 'antd';
import moment from 'moment';

import { createProject, updateProject } from '../../store/projects/actions';

import yup from '../../utils/yup';

import AdminPermission from '../permissions/AdminPermission';
import TextInput from '../inputs/TextInput';
import MoneyInput from '../inputs/MoneyInput';
import DateInput from '../inputs/DateInput';
import CheckboxInput from '../inputs/CheckboxInput';
import DescriptionInput from '../inputs/DescriptionInput';
import SubmitButton from '../buttons/SubmitButton';

import * as Styled from './styles/Form.styles';

const MIN_DATE = moment().endOf('day');

const ProjectForm = ({
  handleSubmit,
  resetForm,
  projectCreated,
  projectUpdated,
  onSuccess,
  loading
}) => {
  useEffect(() => {
    if (projectCreated || projectUpdated) {
      resetForm();
      onSuccess();
    }
  }, [projectCreated, projectUpdated]);

  return (
    <Spin spinning={loading}>
      <Form onSubmit={handleSubmit}>
        <Styled.Group>
          <Styled.Item flex={3}>
            <Field name="nome" label="Nome" component={TextInput} />
          </Styled.Item>
          <Styled.Item flex={1}>
            <Field name="objetivo_arrecadacao" label="Objetivo" component={MoneyInput} />
          </Styled.Item>
        </Styled.Group>
        <Styled.Group>
          <Styled.Item flex={1}>
            <Field
              name="data_inicio"
              label="Data de Início"
              component={DateInput}
              disabledDate={date => date < MIN_DATE}
            />
          </Styled.Item>
          <Styled.Item flex={1}>
            <Field
              name="data_fim"
              label="Data Fim"
              component={DateInput}
              disabledDate={date => date < MIN_DATE}
            />
          </Styled.Item>
          <Styled.Item flex={3}>
            <Field name="URL" label="Website" component={TextInput} placeholder="Website" />
          </Styled.Item>
        </Styled.Group>
        <Styled.Group>
          <Styled.Item>
            <Field
              hideLabel
              name="encerrar_projeto_objetivo"
              label="Encerrar projeto ao atingir o objetivo de arrecadação"
              component={CheckboxInput}
            />
          </Styled.Item>
          <AdminPermission>
            <Styled.Item>
              <Field hideLabel name="ativo" label="Ativo" component={CheckboxInput} />
            </Styled.Item>
          </AdminPermission>
        </Styled.Group>
        <Field name="descricao" label="Descrição" component={DescriptionInput} />
        <SubmitButton />
      </Form>
    </Spin>
  );
};

ProjectForm.propTypes = {
  resetForm: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onSuccess: PropTypes.func,
  projectCreated: PropTypes.bool.isRequired,
  projectUpdated: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  isEdit: PropTypes.bool,
  loading: PropTypes.bool
};

ProjectForm.defaultProps = {
  onSuccess: () => null,
  loading: false,
  isEdit: false
};

const validationSchema = yup.object().shape({
  nome: yup
    .string()
    .min(3)
    .required(),
  objetivo_arrecadacao: yup
    .number()
    .min(1)
    .required(),
  data_inicio: yup.date().required(),
  data_fim: yup.date(),
  URL: yup.string().required(),
  encerrar_projeto_objetivo: yup.bool(),
  descricao: yup.string().required()
});

const handleSubmit = (values, formikBag) => {
  const payload = { ...values };
  payload.ativo = payload.ativo === undefined ? 1 : payload.ativo;
  if (formikBag.props.isEdit) {
    formikBag.props.updateProject(payload);
  } else {
    formikBag.props.createProject(payload);
  }
};

const mapStateToProps = ({ projects }) => ({
  projectCreated: projects.projectCreated,
  projectUpdated: projects.projectUpdated
});

const mapPropsToValues = props => {
  return props.initialValues;
};

const enhance = compose(
  connect(
    mapStateToProps,
    { createProject, updateProject }
  ),
  withFormik({
    enableReinitialize: true,
    mapPropsToValues,
    validationSchema,
    handleSubmit
  })
);

export default enhance(ProjectForm);
