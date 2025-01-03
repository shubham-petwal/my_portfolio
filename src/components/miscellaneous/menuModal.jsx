import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  List,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function MenuModal({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();
  const navigateMenu = [
    {
      name: "About",
      to: "/about-me",
    },
    {
      name: "Skils",
      to: "/skills",
    },
    {
      name: "Project",
      to: "/projects",
    },
    {
      name: "Use",
      to: "/working-in-progress",
    },

    {
      name: "Contact",
      to: "/contact-me",
    },
  ];

  return (
    <>
      <div
        onClick={onOpen}
        className="rounded-3xl border-solid border-2 px-3 py-1 "
      >
        {children}
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className="bg-white dark:bg-[#1d1d1d] dark:border-[#3e3e3e] dark:text-white">
          <ModalHeader>Navigation</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="bg-white dark:bg-[#1d1d1d] dark:border-[#3e3e3e] dark:text-white">
            <div className="grid gap-3 ">
              {navigateMenu.map(({ name, to }) => (
                <div key={to}>
                  <div className="grid gap-2">
                    <div
                      onClick={() => navigate(to)}
                      className="cursor-pointer text-base font-normal"
                    >
                      {name}
                    </div>
                    <div className="h-px bg-gray-200 border-0"></div>
                  </div>
                </div>
              ))}
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
