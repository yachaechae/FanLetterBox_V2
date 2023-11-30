import MemberButton from 'components/MemberButton'
import React from 'react'
import MemberData from 'data/memberData'
import { HeaderStyles, MemberList, Title } from 'style/HeaderStyle'
import { useRootContext } from 'context/rootContext'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedId } from 'redux/action'

const defaultButtonStyle = {
    "$bgColor" : "#fff",
    "$fontColor" : "#000",
    "$paddingRight": "1rem"
}

export default function Header() {
    const selectedId = useSelector((state) => state.selectedId)
    const dispatch = useDispatch()


    const activeBtn = (id) => {
		if (selectedId === id) {
            dispatch(setSelectedId(""))
		} else {
			dispatch(setSelectedId(id))
		}
	}
    
    return (
        <HeaderStyles>
            <Title>DAY6</Title>
            <MemberList>
                {MemberData.map((member)=>{
                    return <MemberButton 
                    key={member.id} 
                    name={member.name} 
                    id={member.id} 
                    activeBtn={activeBtn}
                    buttonStyle = {member.id === selectedId ? {
                        "$bgColor" : member.colorCode,
                        "$fontColor" : "#fff",
                        "$addEmoji" : `"${member.emoji}"`,
                        "$paddingRight": "2.5rem"
                    } : {...defaultButtonStyle, $colorCode : member.colorCode}}
                    />  
                })}
            </MemberList>
        </HeaderStyles>
    )
}
