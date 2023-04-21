"use client";
import { useState } from "react";
import { Breadcrumb, Button, Modal, Dropdown } from "flowbite-react";
import { useRouter } from "next/navigation";
import {
  HiHome,
  HiFilter,
  HiOutlineViewGrid,
  HiOutlineViewList,
} from "react-icons/hi";
export default function Products() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="px-2">
      <Breadcrumb>
        <Breadcrumb.Item href="/" icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">All Products</Breadcrumb.Item>
      </Breadcrumb>
      <h2>All Plants</h2>
      <div className="flex justify-between border-gray-300">
        <Button onClick={() => setIsOpen(true)}>
          <HiFilter className="mr-2" /> Filters
        </Button>
        <Modal show={isOpen} onClose={() => setIsOpen(false)}>
          <Modal.Header>Filters</Modal.Header>
          <Modal.Body></Modal.Body>
        </Modal>
        <div className="flex">
          <Dropdown label="Sort by">
            <Dropdown.Item>A-Z</Dropdown.Item>
            <Dropdown.Item>Z-A</Dropdown.Item>
            <Dropdown.Item>Price, low to hight</Dropdown.Item>
            <Dropdown.Item>Price, hight to low</Dropdown.Item>
            <Dropdown.Item>Old to new</Dropdown.Item>
            <Dropdown.Item>New to old</Dropdown.Item>
          </Dropdown>
          <Button.Group>
            <Button size="lg">
              <HiOutlineViewGrid />
            </Button>
            <Button size="lg">
              <HiOutlineViewList />
            </Button>
          </Button.Group>
        </div>
      </div>
    </div>
  );
}
