"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/PixelExperienceLogo 1.png";
import { useDisclosure } from "@mantine/hooks";
import { Dialog, Group } from "@mantine/core";
import { Burger } from "@mantine/core";
import { Modal, Button } from "@mantine/core";
import { useState } from "react";
import { Combobox, TextInput, useCombobox } from "@mantine/core";
import { IoMdSearch } from "react-icons/io";

export default function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [isOpen, { toggle: newToggle, close: isClose }] = useDisclosure(false);

  const groceries = [
    "🍎 Apples",
    "🍌 Bananas",
    "🥦 Broccoli",
    "🥕 Carrots",
    "🍫 Chocolate",
  ];

  const combobox = useCombobox();
  const [value, setValue] = useState("");
  const shouldFilterOptions = !groceries.some((item) => item === value);
  const filteredOptions = shouldFilterOptions
    ? groceries.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase().trim())
      )
    : groceries;

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  const innerSectionRef = useRef(null);
  const buttonRef = useRef(null);

  // Example function to log or manipulate the inner section

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="flex  justify-center md:justify-between items-center h-40">
          <Image src={logo} alt="Next.js logo" width={180} height={38} />
          <div className="hidden sm:flex">
            <ul className="flex gap-4 items-center">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/Devices">Devices</Link>
              </li>
              <li>
                <Link href="/news">News</Link>
              </li>
              <li>
                <Link href="/About">About</Link>
              </li>
              <li className="bg-buttonPrint w-[105px] h-[56px] rounded-[60px] text-white text-center p-4">
                <Link href="/Donate"> Donate </Link>
              </li>
            </ul>
          </div>
          <Group
            justify="center"
            className="md:hidden fixed right-4 bottom-5 z-[999]"
          >
            <Burger
              className="bg-[#2196F3] rounded-full w-[60px] h-[60px] flex justify-center items-center"
              opened={isOpen}
              onClick={newToggle}
              aria-label="Toggle navigation"
              color="white"
            />
          </Group>

          <Dialog
            className="w-48  bg-[#2196F3] rounded-[20px] text-white text-center p-0"
            opened={isOpen}
            onClose={isClose}
            radius="md"
            position={{ bottom: 20, right: 10 }}
          >
            <Group align="flex-end " className="justify-center ">
              <ul className="grid gap-8 items-center mt-10 mb-[61px]">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/Devices">Devices</Link>
                </li>
                <li>
                  <Link href="/news">News</Link>
                </li>
                <li>
                  <Link href="/About">About</Link>
                </li>
                <li className="bg-buttonPrint px-6 rounded-[60px] text-white text-center py-2">
                  <Link href="/Donate"> Donate </Link>
                </li>
              </ul>
            </Group>
          </Dialog>
        </div>
      </div>
      <div className=" bg-[#2196F3]">
        <div className=" flex items-center py-6  md:py-12 justify-center">
          <div className="w-full max-w-sm min-w-[200px] px-10">
            <Button
              ref={buttonRef}
              onClick={toggle}
              aria-label="Toggle navigation"
              className="w-full bg-[#64B5F6] placeholder:text-[#FFFFFF] text-sm  px-3 py-2  rounded-[60px] focus:outline-none flex"
            >
              <IoMdSearch className="w-6 h-6" /> Type here...
            </Button>
            <Modal
              className=""
              opened={opened}
              onClose={close}
              withCloseButton={false}
              overlayProps={{
                backgroundOpacity: 0.55,
                blur: 3,
              }}
              centered={true}
              position={{ top: 10, right: 10 }}
              style={{ overflow: "auto" }}
            >
              <Modal.Body
                ref={innerSectionRef}
                style={{ height: "355px", overflow: "auto" }}
              >
                <Combobox
                  onOptionSubmit={(optionValue) => {
                    setValue(optionValue);
                    combobox.closeDropdown();
                  }}
                  store={combobox}
                >
                  <Combobox.Target>
                    <TextInput
                      label="Pick value or type anything"
                      placeholder="Pick value or type anything"
                      value={value}
                      onChange={(event) => {
                        setValue(event.currentTarget.value);
                        combobox.openDropdown();
                        combobox.updateSelectedOptionIndex();
                      }}
                      onClick={() => combobox.openDropdown()}
                      onFocus={() => combobox.openDropdown()}
                      onBlur={() => combobox.closeDropdown()}
                    />
                  </Combobox.Target>

                  <Combobox.Dropdown>
                    <Combobox.Options>
                      {options.length === 0 ? (
                        <Combobox.Empty>Nothing found</Combobox.Empty>
                      ) : (
                        options
                      )}
                    </Combobox.Options>
                  </Combobox.Dropdown>
                </Combobox>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}
