import { ChevronUpIcon, CirclePlus, ListTodo, Tags } from "lucide-react";
import { memo } from "react";
import { BsPinAngle } from "react-icons/bs";
import { PiBookBookmark } from "react-icons/pi";
import { CiStickyNote } from "react-icons/ci";
import TrashEmptySvg from "./svg/tarsh-empty-svg";
import TrashFullSvg from "./svg/trash-full-svg";
import SidebarHeader from "./note-book-header";
import NotebookListItem from "./note-book-list-item";
import { Disclosure, Transition } from "@headlessui/react";
import Button from "./button";

const Notebooks = () => {
  return (
    <div className={`h-full flex flex-col `}>
      <div>
        <SidebarHeader />
      </div>
      {/* <TestNavbar /> */}
      <div className=" flex-1  overflow-y-auto overflow-hidden">
        <ul className="flex flex-col space-y-1">
          <NotebookListItem
            title="All Notes"
            icon={<CiStickyNote size={25} />}
            selected={true}
            noteCount={50}
          />
          <NotebookListItem
            title="Pinned Notes"
            icon={<BsPinAngle size={25} />}
            selected={false}
            noteCount={2}
          />
          <Disclosure defaultOpen>
            <>
              <div className="flex flex-1 justify-between focus:outline-none focus-visible:ring px-5 py-1 cursor-auto me-[-5px]">
                <div className="flex text-gray-400">
                  <PiBookBookmark size={25} className="me-1" /> Notebooks
                </div>
                <Button>
                  <CirclePlus className=" w-[15px] h-[15px] " />
                </Button>
              </div>
              <Disclosure.Panel>
                <NotebookListItem
                  minun={true}
                  className="ps-10"
                  title="first notebook"
                  selected={false}
                  noteCount={0}
                />
              </Disclosure.Panel>
            </>
          </Disclosure>

          {/* <NotebookListItem */}
          {/*   heading={true} */}
          {/*   title="Notebooks" */}
          {/*   icon={<PiBookBookmark size={25} />} */}
          {/*   selected={false} */}
          {/*   button={ */}
          {/*     <Button> */}
          {/*       <CirclePlus className=" w-[15px] h-[15px] " /> */}
          {/*     </Button> */}
          {/*   } */}
          {/* /> */}
          <NotebookListItem
            title="Trash"
            noteCount={1}
            icon={
              false ? (
                <TrashEmptySvg
                  className="w-[25px] h-[25px] stroke-gray-300"
                  strokeWidth={3}
                />
              ) : (
                <TrashFullSvg
                  className="w-[25px] h-[25px] stroke-gray-300"
                  strokeWidth={3}
                />
              )
            }
            selected={false}
          />

          <Disclosure>
            {({ open }) => (
              <>
                <div className="flex flex-1 justify-between focus:outline-none focus-visible:ring px-5 py-1 cursor-auto">
                  <div className="flex text-gray-400">
                    <ListTodo className="me-1" /> Status
                  </div>
                  <Disclosure.Button className="me-[-5px]">
                    <ChevronUpIcon
                      className={`${open ? "rotate-180 transform" : ""} h-5 cursor-pointer transition-transform`}
                    />
                  </Disclosure.Button>
                </div>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform h-0 opacity-0"
                  enterTo="transform h-auto opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform h-auto opacity-100"
                  leaveTo="transform h-0 opacity-0"
                >
                  <Disclosure.Panel static>
                    <NotebookListItem
                      minun={true}
                      className="ps-10"
                      title="status"
                      selected={false}
                    />
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <div className="flex flex-1 justify-between focus:outline-none focus-visible:ring px-5 py-1 cursor-auto">
                  <div className="flex text-gray-400">
                    <Tags className="me-1" /> Tags
                  </div>
                  <Disclosure.Button className="me-[-5px]">
                    <ChevronUpIcon
                      className={`${open ? "rotate-180 transform" : ""} h-5 cursor-pointer transition-transform`}
                    />
                  </Disclosure.Button>
                </div>
                <Disclosure.Panel>
                  <NotebookListItem
                    minun={true}
                    className="ps-10"
                    title="Tags"
                    selected={false}
                  />
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </ul>
      </div>
      <div className="p-2 justify-center items-center text-center bg-black/20">
        mohamed azouz
      </div>
    </div>
  );
};

export default memo(Notebooks);
