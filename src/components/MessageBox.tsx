import React from 'react'
import Drawer from '@material-ui/core/Drawer'

interface MessageBoxProps {

    onClick: Function
    drawerState: boolean
}

const MessageBox = (props: MessageBoxProps) => {
    const { onClick, drawerState } = props

    const onDrawerClose = () => {
        onClick(!drawerState)
    }

    return (
        <div>
            <Drawer anchor='right' open={drawerState} onClose={onDrawerClose}>
                <p>Message</p>
                <p>Message</p>
                <p>Message</p>

            </Drawer >
        </div>
    )
}

export default MessageBox
