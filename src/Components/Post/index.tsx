import React, { useEffect, useState } from "react";
import * as Flex from './style';
import { PrimaryButton, SecondaryButton } from "../../Common/style";
import OverlayForm from "../OverlayForm";

interface IProps {
    load?: any,
    error?: any,
    post?: any,
    updatePost?: Function,
    deletePost?: Function,
}

const Post = (props: IProps) => {
    const { load, post, updatePost, deletePost } = props;
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState({});

    useEffect(() => {}, [post]);

    const onEdit = (p?: any) => {
        setShow(true);
        setSelected(p);
    }

    const onSubmit = (p?: any) => {
        if(updatePost) updatePost(p);
        setShow(false);
    }

    const onDelete = (p?: any) => {
        if(deletePost) deletePost(p);
    }

    return (
        <Flex.Container>
            <h1>Blog</h1>
            <Flex.UL className="posts">
                {post && post.map((p?: any) => (
                    <Flex.LI key={`${p.id}`}>
                        <h3>{p.title}</h3>
                        <p>{p.body}</p>
                        <div>
                            <PrimaryButton disabled={load} onClick={() => onEdit(p)}>Edit</PrimaryButton>
                            <SecondaryButton disabled={load} onClick={() => onDelete(p)}>Delete</SecondaryButton>
                        </div>
                    </Flex.LI>
                ))}
            </Flex.UL>
            <OverlayForm show={show} post={selected} onSubmit={(p?: any) => onSubmit(p)} onCancel={() => setShow(false)} />
        </Flex.Container>
    )
}

export default Post;