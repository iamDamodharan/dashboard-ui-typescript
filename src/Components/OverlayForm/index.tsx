import React, { useEffect, useState } from "react";
import * as Flex from "./style";
import { PrimaryButton, SecondaryButton } from "../../Common/style";

interface IProps {
    show?: boolean,
    post?: any,
    onSubmit?: Function,
    onCancel?: Function,
}

const OverlayForm = (props: IProps) => {
    const { show, post, onSubmit, onCancel } = props;
    const [title, setTitile] = useState(post.title || '');
    const [body, setBody] = useState(post.body || '');

    useEffect(() => {
        setTitile(post.title);
        setBody(post.body);
    }, [props]);

    const onClickSubmit = () => {
        if (onSubmit) onSubmit({ title: title, body: body, id: post.id, userId: 1 });
    }

    const onClickCancel = () => {
        setTitile('');
        setBody('');
        if (onCancel) onCancel();
    }

    if (!show) {
        return null;
    }

    return (
        <Flex.Overlay>
            <Flex.Container>
                <h2>Edit</h2>
                <Flex.Form action="#" onSubmit={(e) => e.preventDefault()}>
                    <Flex.Label htmlFor="title">Title</Flex.Label>
                    <Flex.Input type="text" id="title" name="titlw" value={title} onChange={e => setTitile(e.target.value)} />
                    <Flex.Label htmlFor="body">Body</Flex.Label>
                    <Flex.Textarea id="body" name="body" value={body} onChange={e => setBody(e.target.value)} />
                    <PrimaryButton onClick={() => onClickSubmit()}>Save</PrimaryButton>
                    <SecondaryButton onClick={() => onClickCancel()}>Cancel</SecondaryButton>
                </Flex.Form>
            </Flex.Container>
        </Flex.Overlay>
    )
}

export default OverlayForm;