/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { FC } from 'react';
import {SeparatorProps} from "./Separator.types";

const Separator: FC<SeparatorProps> = ({condition, finalStyles}) => {
    if (!condition) {
        return null
    }
    const separatorStyles = css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        margin: auto 0.125rem;
        font-size: 1.25rem;
        font-weight: bold;
        color: ${finalStyles.separatorColor};
    `;
    return (
        <p css={separatorStyles}>:</p>
    );
};

export default Separator;