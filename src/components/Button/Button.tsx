interface Props {  placeholder: string;
  onClick?: () => {};
}

export function Button({ placeholder = "Enviar", onClick }: Props) {
  return (
    <button
      type="submit"
      className="py-2 px-4 transition-all bg-primary-700 rounded-lg text-white focus:ring-primary-200 text-xs font-medium hover:bg-primary-800 hover:text-white"
      onClick={onClick}
    >
      <small className="text-sm">{placeholder}</small>
    </button>
  );
}
