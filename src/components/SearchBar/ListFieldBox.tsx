import { FieldBox, FieldBoxProps } from './FieldBox';

export const ListFieldBox = () => {
  const lst_filedbox: FieldBoxProps[] = [
    {
      name: "Wholesale - Retail - Store management",
      image: "https://vieclam24h.vn/_next/image?url=%2Fimg%2Foccupation-icon%2F6.png&w=48&q=75",
      jobQuantity: 2306,
    },
    {
      name: "Business",
      image: "https://vieclam24h.vn/_next/image?url=%2Fimg%2Foccupation-icon%2F13.png&w=48&q=75",
      jobQuantity: 6068,
    },
    {
      name: "Marketing",
      image: "https://vieclam24h.vn/_next/image?url=%2Fimg%2Foccupation-icon%2F12.png&w=48&q=75",
      jobQuantity: 1872,
    },
    {
      name: "Science - Technology",
      image: "https://vieclam24h.vn/_next/image?url=%2Fimg%2Foccupation-icon%2F34.png&w=48&q=75",
      jobQuantity: 1760,
    },
    {
      name: "Auditing",
      image: "https://vieclam24h.vn/_next/image?url=%2Fimg%2Foccupation-icon%2F26.png&w=48&q=75",
      jobQuantity: 1528,
    },
    {
      name: "Administration - Secretary",
      image: "https://vieclam24h.vn/_next/image?url=%2Fimg%2Foccupation-icon%2F1.png&w=48&q=75",
      jobQuantity: 2053,
    },
    {
      name: "Accounting",
      image: "https://vieclam24h.vn/_next/image?url=%2Fimg%2Foccupation-icon%2F17.png&w=48&q=75",
      jobQuantity: 2503,
    },
    {
      name: "Internship",
      image: "https://vieclam24h.vn/_next/image?url=%2Fimg%2Foccupation-icon%2F53.png&w=48&q=75",
      jobQuantity: 550,
    },
  ];
  // Sửa lại thành api
  return (
    <div className='relative grid grid-cols-9 items-center gap-x-1 gap-y-2'>
      {lst_filedbox.map((item, index) => (
        <FieldBox key={index} {...item} />
      ))}
    </div>
  );
};
