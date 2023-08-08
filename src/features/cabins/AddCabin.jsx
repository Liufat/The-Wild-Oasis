import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState();
//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal(!isOpenModal)}>
//         Add New Cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCabinForm onClose={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add New Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddCabin;
