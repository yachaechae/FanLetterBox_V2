import React from 'react'
import { ButtonStyles } from 'style/MemberBtnStyle'

export default function MemberButton({id, name, buttonStyle, activeBtn}) {
  	return (
		<>
    	<ButtonStyles id={id} onClick={()=>{activeBtn(id)}} {...buttonStyle}>{name}</ButtonStyles>
		</>
  	)
}