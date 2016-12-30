import React from 'react';
import ReactDOM from 'react-dom';
import LzEditor from './editor'
class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "<p>根据山东省重污染天气应急工作小组办公室《关于启动重污染天气Ⅰ级响应的通知》，我市于12月29日20时发布重污染天气红色预警，并于12月30日20时采取包括机动车单双号限行等措施的重污染天气Ⅰ级应急响应。经气象部门与环保部门最新会商，由于天气形势发生了一定变化，12月31日至2017年1月1日，虽然空气扩散条件转差，31日仍以中度污染为主，预计1月1日空气质量以中度至重度为主，达不到严重污染的程度。为保障市民节假日出行，经市政府批准，暂停实施机动车单双号限行措施。其它应急响应措施继续执行。</p>"
        }
        this.receiveHtml = this.receiveHtml.bind(this);
    }
    receiveHtml(content) {
        console.log("recieved content", content);
    }
    render() {
        const uploadConfig = {
            QINIU_URL: "http://up.qiniu.com", //上传地址
            QINIU_IMG_TOKEN_URL: "http://114.55.148.57:8083/getQiniuUptoken.do", //请求图片的token
            QINIU_PFOP: {
                url: "http://114.55.148.57:8083/QiniuPicPersist.do"
            },
            QINIU_VIDEO_TOKEN_URL: "http://114.55.148.57:8083/getQiniuUptoken.do", //请求视频资源的token
            QINIU_FILE_TOKEN_URL: "http://114.55.148.57:8083/getQiniuUptoken.do?name=patch", //另一种资源的token的获取
            QINIU_IMG_DOMAIN_URL: "https://image.qiluyidian.mobi", //图片文件地址的前缀
            QINIU_DOMAIN_VIDEO_URL: "https://image.qiluyidian.mobi", //视频文件地址的前缀
            QINIU_DOMAIN_FILE_URL: "https://static.qiluyidian.com/", //其他文件地址前缀
        }
        return <LzEditor active={true} HtmlContent={this.state.content} cbReceiver={this.receiveHtml} uploadConfig={uploadConfig} Color={false} FullScreen={false}/>
    }
}

ReactDOM.render(<Test/>, document.getElementById('test'));
