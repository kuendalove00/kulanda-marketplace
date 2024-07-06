import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';
import TableTwo from '../../../components/Tables/CategoryTable';
import DefaultLayout from '../../../layout/DefaultLayout';

const ListProduto = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Produtos" />

      <div className="flex flex-col gap-10">
        <TableTwo />
      </div>
    </DefaultLayout>
  );
};

export default ListProduto;
