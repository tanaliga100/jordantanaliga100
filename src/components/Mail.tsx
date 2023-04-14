type Props = {
  label: string;
  href?: string;
  subject: string;
  body: string;
};

const Mail = (props: Props) => {
  return (
    <div>
      <a
        href={`${props.href}?subject=${props.subject || ""}&body=${
          props.body || ""
        }`}
      >
        {props.label}
      </a>
    </div>
  );
};

export default Mail;
