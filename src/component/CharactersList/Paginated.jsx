import React, { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import { useSelector } from "react-redux";
import CharactersList from "./CharactersList";
import Style from "./Paginated.module.css"

export default function Paginated() {

    const { characters } = useSelector( state => state.global_state)
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = characters.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(characters.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % characters.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <CharactersList 
        characterList={currentItems}
      />
      <div>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName={Style.pagination}
          pageLinkClassName={Style.page_num}
          previousLinkClassName={Style.page_num}
          nextLinkClassName={Style.page_num}
          activeClassName={Style.active}
        />
      </div>
    </>
  );
}
