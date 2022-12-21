type Props = {
  value: string;
};

export function Error(props: Props) {
  return <div className='error'>{props.value}</div>;
}
