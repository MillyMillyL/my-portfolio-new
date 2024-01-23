import Button from '../components/Button';

function ConfirmDelete({ pro, onCloseModal }) {
  return (
    <div className=" space-y-4">
      <p className="text-left text-lg font-bold">Delete Project {pro.title}</p>
      <p>
        Are you sure you want to delete this booking {pro.title} permanently?
        This action cannot be undone.
      </p>
      <div className="flex items-center justify-center gap-4">
        <Button
          buttonClass="bg-gray-200 hover:bg-gray-300 translate-all duration-500"
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button buttonClass="bg-red-500 text-white hover:bg-red-600 translate-all duration-500">
          Delete
        </Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
