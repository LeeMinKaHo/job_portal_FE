export interface FieldBoxProps {
  name: string;
  image: string;
  jobQuantity: number;
}

export const FieldBox: React.FC<FieldBoxProps> = ({ name, image, jobQuantity }) => {
  return (
    <div className='grid place-items-center px-2 py-3'>
      <img src={image} alt={name} />
      <p className='text-[12px] text-gray-400'>
        <b className='text-[16px] text-highlight mr-1'>{jobQuantity.toLocaleString()}</b>việc
      </p>
      <p className='line-clamp-2 text-center text-[13px] font-semibold text-[#414045]'>
        {name}
      </p>
    </div>
  );
};
