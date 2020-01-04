import React from "react"
import styled from "styled-components"

const List = styled.ul`
  margin-top: 3.5rem;
  margin-bottom: 1.5rem;
  .active {
    font-weight: 700;
  }
`

const TypeItem = styled.li`
  display: inline-block;
  margin-right: 2rem;
  cursor: pointer;

  &:hover {
    font-weight: 700;
  }
`

const TypeList = ({ types, activeFilter, filterCategory, updateFilter }) => {
  const handleClick = event => {
    updateFilter(event)
  }

  return (
    <List>
      <TypeItem
        className={"typelist__type " + (!activeFilter && "active")}
        data-key={filterCategory}
        data-value={null}
        onClick={handleClick}
      >
        Show All
      </TypeItem>
      {types.map(type => (
        <TypeItem
          className={
            "typelist__type" + (type === activeFilter ? " active" : "")
          }
          key={type}
          id={type}
          data-key={filterCategory}
          data-value={type}
          onClick={handleClick}
        >
          {type}
        </TypeItem>
      ))}
    </List>
  )
}

export default TypeList
