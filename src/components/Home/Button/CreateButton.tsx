
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import ProductForm from "../Form/ProductForm";

export default function CreateButton() {
  const [openModal, setOpenModal] = useState(false);
  const getDataFrom = () => {};
  const createProduct = async () => {
    try {
      const addProduct = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        body: JSON.stringify({
          getDataFrom,
        }),
      });
      const jsonRes = await addProduct.json();
      console.log(jsonRes);
    } catch (e) {
      console.log(e);
    } finally {
      setOpenModal(false);
    }
  };
  return (
    <>
      <div className="">
        <Button onClick={() => setOpenModal(true)}>Create New Product</Button>
      </div>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          {/* <FormComponent getDataFrom={getDataFrom} /> */}
          <ProductForm getDataFrom={getDataFrom}/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={createProduct}>Create</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}