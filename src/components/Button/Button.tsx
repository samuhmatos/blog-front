interface Props {  placeholder?: string;
  onClick?: () => void;
}

export function Button({ placeholder = "Enviar", onClick }: Props) {
  return (
    <button
      type="submit"
      className="py-2 px-4 transition-all text-xs font-medium text-gray-200 bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900  hover:bg-primary-800 disabled:bg-primary-950 disabled:text-gray-400 disabled:opacity-90"
      onClick={onClick}
    >
      <small className="text-sm">{placeholder}</small>
    </button>
  );
}
