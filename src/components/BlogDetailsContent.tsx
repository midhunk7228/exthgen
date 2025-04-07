
function BlogDetailsContent({ blogDetails }: any) {
  return (
    <div className="flex flex-col justify-center items-center gap-12 pb-12">
      <div className="max-w-4xl">
        <p className="text-[#323442] text-xl font-extralight leading-7 px-3 md:px-3 lg:px-0">
          {blogDetails?.blogDescription}
        </p>
      </div>
      <div className="max-w-7xl">
        <img
          src={`https://api.www.exthgen.com${blogDetails?.blogCoverImage?.url}`}
          alt="image"
          className="w-[70vw] h-[15rem] md:h-[30rem] lg:h-[35rem] rounded-lg"
        />
      </div>
      <div className="max-w-4xl flex flex-col gap-2">
      {blogDetails?.blogContent?.map((block: any, index: number) => {
            if (block.type === "list") {
              return (
                <ul
                  key={index}
                  className={`text-lg font-light text-black ${
                    block.format === "ordered" ? "list-decimal" : "list-disc"
                  } pl-6`}
                >
                  {block.children.map(
                    (listItem: any, listItemIndex: number) => (
                      <li key={listItemIndex}>
                        {listItem.children.map(
                          (child: any, childIndex: number) => (
                            <span
                              key={childIndex}
                              className={`${
                                child?.bold === true ? "font-semibold" : ""
                              }`}
                            >
                              {child.text}
                            </span>
                          )
                        )}
                      </li>
                    )
                  )}
                </ul>
              );
            } else {
              return (
                <p key={index} className="text-lg font-light text-black">
                  {block.children.map((child: any, childIndex: number) => (
                    <span
                      key={childIndex}
                      className={`${
                        child?.bold === true ? "font-semibold" : ""
                      }`}
                    >
                      {child.text}
                    </span>
                  ))}
                </p>
              );
            }
          })}
      </div>
    </div>
  );
}

export default BlogDetailsContent;
