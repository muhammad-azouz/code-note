import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronsUpDown, Check } from "lucide-react";

type SelectOption = { key: string; value: string };
type Props = {
  items: SelectOption[];
  selectedItem: SelectOption;
  callback: (value: string) => void;
};

export default function Select(props: Props) {
  const [selected, setSelected] = useState(props.selectedItem);

  useEffect(() => {
    props.callback(selected.key);
  }, [selected]);

  return (
    <div className="w-full">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-sm dark:bg-gray-700 bg-gray-300 py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected.value}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronsUpDown
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md dark:bg-gray-700 bg-gray-300 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {props.items.length === 0 ? (
                <Listbox.Option key={1} value={"no options"} />
              ) : (
                props.items.map((item, itemIdx) => (
                  <Listbox.Option
                    key={itemIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 px-4 pr-4 justify-between flex ${
                        active ? "bg-gray-400 dark:bg-gray-800" : ""
                      }`
                    }
                    value={item}
                  >
                    {({ selected }) => (
                      <>
                        <div className="flex-1 shrink-0">{item.value}</div>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {selected ? (
                            <span className="flex items-center text-sky-600">
                              <Check className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))
              )}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
