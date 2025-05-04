import React from 'react';

interface MenuResponseProps {
  id: number;
  title: string;
  description: string;
  src?: string;
  media?: {
    id: string;
    fileName: string;
    filePath: string;
    fileType: string;
  } | null;
  category: {
    id: number;
    name: string;
  };
}

interface MenuGridProps {
  menu: MenuResponseProps[];
  isSmallScreen?: boolean;
  cols?: number;
}

const MenuGrid: React.FC<MenuGridProps> = ({
  menu,
  isSmallScreen,
  cols = 3,
}) => {
  const gridCols = `grid-cols-${cols}`;

  function formatDescription(description: string): string {
    if (isSmallScreen) {
      return description
        .replace(/{{BR_MOBILE}}/g, '<br />')
        .replace(/{{BR_PC}}/g, ' ');
    } else {
      return description
        .replace(/{{BR_MOBILE}}/g, ' ')
        .replace(/{{BR_PC}}/g, '<br />');
    }
  }

  return (
    <div
      className={`${
        isSmallScreen ? ' Slb-SubTitle-mo' : 'max-w-[1300px] Slb-SubTitle'
      } flex flex-col w-full`}
    >
      <div
        className={`${
          isSmallScreen ? 'py-1' : 'py-2'
        } bg-[#EF812A] w-full text-White flex justify-center items-center`}
      >
        {menu != null && menu[0].category.name}
      </div>
      <div
        className={`${
          isSmallScreen
            ? 'grid-cols-2 mt-2 gap-x-2 gap-y-4'
            : `${gridCols} mt-4 gap-x-4 gap-y-8`
        } grid`}
      >
        {menu != null &&
          menu.map((item) => (
            <div
              className={`${isSmallScreen ? '' : ''} flex flex-col text-center`}
              key={item.id}
            >
              <div className={`${isSmallScreen ? '' : ''}`}>
                <img
                  loading='lazy'
                  className={`${isSmallScreen ? 'flex-1' : 'flex-1'} w-full`}
                  alt={item.title}
                  src={item.src}
                />
              </div>

              <div
                className={`${
                  isSmallScreen ? 'text-[14px] my-2' : 'text-slbContent my-4'
                } font-semibold`}
              >
                {item.title}
              </div>

              <div
                className={`${
                  isSmallScreen ? 'text-[10px]' : 'text-[14px]'
                } font-medium`}
                dangerouslySetInnerHTML={{
                  __html: formatDescription(item.description),
                }}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default MenuGrid;
