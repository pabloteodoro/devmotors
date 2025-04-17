import styles from './styles.module.scss'


export default function Page({params: {slug}}: {
    params: {slug : string}
}) {
    return (
        <div>
            <h1>Post</h1>
            <p>Post</p>
        </div>
    )
}