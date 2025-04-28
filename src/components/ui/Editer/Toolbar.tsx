import React from "react";

interface ToolbarProps {
  id: string;
}

const Toolbar: React.FC<ToolbarProps> = ({ id }) => {
  return (
    <div id={id}>
      <select className='ql-size' defaultValue='12px'>
        <option value='8px'>8px</option>
        <option value='9px'>9px</option>
        <option value='10px'>10px</option>
        <option value='12px'>12px</option>
        <option value='14px'>14px</option>
        <option value='16px'>16px</option>
        <option value='20px'>20px</option>
        <option value='24px'>24px</option>
        <option value='32px'>32px</option>
        <option value='42px'>42px</option>
        <option value='54px'>54px</option>
        <option value='68px'>68px</option>
        <option value='84px'>84px</option>
        <option value='98px'>98px</option>
      </select>
      <button className='ql-bold' />
      <button className='ql-italic' />
      <button className='ql-underline' />
      <button className='ql-strike' />
      <button className='ql-blockquote' />
      <button className='ql-list' value='ordered' />
      <button className='ql-list' value='bullet' />
      <button className='ql-indent' value='-1' />
      <button className='ql-indent' value='+1' />
      <button className='ql-link' />
      <button className='ql-image' />
      <select className='ql-align'>
        <option value='' />
        <option value='left' />
        <option value='center' />
        <option value='right' />
        <option value='justify' />
      </select>
      <select className='ql-color'>
        <option value='' />
        <option value='red' />
        <option value='green' />
        <option value='blue' />
        <option value='yellow' />
        <option value='pink' />
        <option value='orange' />
        <option value='purple' />
        <option value='cyan' />
        <option value='white' />
        <option value='magenta' />
        <option value='lime' />
        <option value='teal' />
        <option value='navy' />
        <option value='maroon' />
        <option value='olive' />
        <option value='silver' />
        <option value='gold' />
        <option value='brown' />
        <option value='black' />
      </select>
      <select className='ql-background'>
        <option value='' />
        <option value='red' />
        <option value='green' />
        <option value='blue' />
        <option value='yellow' />
        <option value='pink' />
        <option value='orange' />
        <option value='purple' />
        <option value='cyan' />
        <option value='white' />
        <option value='magenta' />
        <option value='lime' />
        <option value='teal' />
        <option value='navy' />
        <option value='maroon' />
        <option value='olive' />
        <option value='silver' />
        <option value='gold' />
        <option value='brown' />
        <option value='black' />
      </select>
      <button className='ql-clean' />
    </div>
  );
};

export default Toolbar;
