import React, { useMemo } from 'react'
import { useTable, useFilters, useGlobalFilter ,usePagination} from 'react-table'
import { COLUMNS } from './columns'
import Data from './Data.json'
import './table.css'
import { GlobalFilter } from './GlobalFilter'
import {StylesDiv,PaddingButton,MainDiv} from './TableStyles'
import { useNavigate } from "react-router-dom";

export const FilteringTable = () => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => Data, [])
  
  const navigate= useNavigate();

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    setGlobalFilter,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 5 }
    },
    useFilters,
    useGlobalFilter,
    usePagination
  )

 
  const { globalFilter ,pageIndex, pageSize} = state
 function paddingBtn(page){
  gotoPage(page)
  navigate(`/${page+1}`);
 }
  
 
 
  return (
    <MainDiv>
      <StylesDiv>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
        {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div>
        <PaddingButton onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </PaddingButton>
        <PaddingButton onClick={() => previousPage()} disabled={!canPreviousPage}>
          <strong>{'<'}</strong>
        </PaddingButton>
        {
          pageOptions.map(pageSize => (
            <>
            <PaddingButton onClick={() => paddingBtn(pageSize)}>{pageSize+1}</PaddingButton>
            
            </>
          ))
          
        
        }
        <PaddingButton onClick={() => nextPage()} disabled={!canNextPage}>
        <strong>{'>'}</strong>
        </PaddingButton>
        <PaddingButton onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </PaddingButton>
        
        
      </div>
      </StylesDiv>
      <StylesDiv>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />


      <table {...getTableProps()}>
        <thead>
        {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div>
        <PaddingButton onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </PaddingButton>
        <PaddingButton onClick={() => previousPage()} disabled={!canPreviousPage}>
          <strong>{'<'}</strong>
        </PaddingButton>
        {
          pageOptions.map(pageSize => (
            <>
            <PaddingButton onClick={() => paddingBtn(pageSize)}>{pageSize+2}</PaddingButton>
            
            </>
          ))
          
        
        }
        <PaddingButton onClick={() => nextPage()} disabled={!canNextPage}>
        <strong>{'>'}</strong>
        </PaddingButton>
        <PaddingButton onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </PaddingButton>
        
        
      </div>
      </StylesDiv>
    </MainDiv>
  )
}
