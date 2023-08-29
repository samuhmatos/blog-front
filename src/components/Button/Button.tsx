interface Props {
  placeholder?: string;
}

export function Button({ placeholder = "Enviar" }: Props) {
  return (
    <button
      type="submit"
      className="py-2 px-4 bg-sky-500 rounded-lg text-gray-200 font-medium hover:bg-sky-600 hover:text-white"
    >
      <small className="text-sm">{placeholder}</small>
    </button>
  );
}
