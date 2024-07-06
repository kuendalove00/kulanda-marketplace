import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';
import TableTwo from '../../../components/Tables/AccountTable';
import DefaultLayout from '../../../layout/DefaultLayout';

const ListConta = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Contas" />

      <div className="flex flex-col gap-10">
        <TableTwo />
      </div>
    </DefaultLayout>
  );
};

export default ListConta;
