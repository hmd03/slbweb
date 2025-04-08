import React from "react";

interface ToolbarProps {
  id: string;
}

const Toolbar: React.FC<ToolbarProps> = ({ id }) => {
  return (
    <div id={id}>
      <select className="ql-size" defaultValue="12px">
        <option value="8px" />
        <option value="9px" />
        <option value="10px" />
        <option value="12px" />
        <option value="14px" />
        <option value="16px" />
        <option value="20px" />
        <option value="24px" />
        <option value="32px" />
        <option value="42px" />
        <option value="54px" />
        <option value="68px" />
        <option value="84px" />
        <option value="98px" />
      </select>
      <button className="ql-bold" />
      <button className="ql-italic" />
      <button className="ql-underline" />
      <button className="ql-strike" />
      <button className="ql-blockquote" />
      <button className="ql-list" value="ordered" />
      <button className="ql-list" value="bullet" />
      <button className="ql-indent" value="-1" />
      <button className="ql-indent" value="+1" />
      <button className="ql-link" />
      <button className="ql-image" />
      <select className="ql-align">
        <option value="" />
        <option value="left" />
        <option value="center" />
        <option value="right" />
        <option value="justify" />
      </select>
      <select className="ql-color">
        <option value="" />
        <option value="red" />
        <option value="green" />
        <option value="blue" />
        <option value="yellow" />
        <option value="pink" />
        <option value="orange" />
        <option value="purple" />
        <option value="cyan" />
        <option value="white" />
        <option value="magenta" />
        <option value="lime" />
        <option value="teal" />
        <option value="navy" />
        <option value="maroon" />
        <option value="olive" />
        <option value="silver" />
        <option value="gold" />
        <option value="brown" />
        <option value="black" />
      </select>
      <select className="ql-background">
        <option value="" />
        <option value="red" />
        <option value="green" />
        <option value="blue" />
        <option value="yellow" />
        <option value="pink" />
        <option value="orange" />
        <option value="purple" />
        <option value="cyan" />
        <option value="white" />
        <option value="magenta" />
        <option value="lime" />
        <option value="teal" />
        <option value="navy" />
        <option value="maroon" />
        <option value="olive" />
        <option value="silver" />
        <option value="gold" />
        <option value="brown" />
        <option value="black" />
      </select>
      <button className="ql-clean" />
    </div>
  );
};

export default Toolbar;
