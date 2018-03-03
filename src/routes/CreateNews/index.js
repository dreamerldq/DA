import React from 'react'
import { Row, Col, Input, Button, Form, Select } from 'antd'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'
import { connect } from 'dva';
import './index.css'

const FormItem = Form.Item;
const { Option } = Select;
class CreateNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      title: '',
      articleType: ''
    };
    this.handleHTMLChange = this.handleHTMLChange.bind(this)
    this.submit = this.submit.bind(this)
    this.edit = this.edit.bind(this)
  }
  handleHTMLChange(htmlContent) {
    this.setState({
      content: htmlContent
    })
  }
  submit() {
    const { form, dispatch } = this.props
    const title = form.getFieldValue('articleTitle')
    const articleType = form.getFieldValue('articleType')
    this.setState({
      title,
      articleType
    }, () => {
      dispatch({ type: 'createNews/createNews', payload: this.state })
    })
  }
  edit() {
    const { form, dispatch } = this.props
    const title = form.getFieldValue('articleTitle')
    const articleType = form.getFieldValue('articleType')
    this.setState({
      title,
      articleType
    }, () => {
      dispatch({ type: 'createNews/editNews', payload: this.state })
    })
  }
  render() {
    const { form, dispatch, createNews } = this.props
    const { news, id } = createNews
    const { getFieldDecorator, getFieldValue } = form;

    const editorProps = {
      contentFormat: 'html',
      placeholder: '',
      initialContent: `${news.content || ''}`,
      onHTMLChange: this.handleHTMLChange,
      viewWrapper: '.article',
      extendControls: [

      ],
      controls: [
        'undo', 'redo', 'split', 'font-size', 'font-family', 'text-color',
        'bold', 'italic', 'underline', 'strike-through', 'superscript',
        'subscript', 'text-align', 'headings', 'list_ul', 'list_ol',
        'blockquote', 'code', 'media'
      ],
      media: {
        image: true
      }
    }
    return (
      <div className="postArticle_container">


        <Form>
          <Row>
         标题：
          </Row>
          <Row>
            <FormItem>
              {getFieldDecorator('articleTitle', {
              initialValue: `${news.title || ''}`,
            rules: [{ required: true, message: '请输入文章标题!' }]
          })(<Input style={{ textAlign: 'center', marginBottom: '5px' }} placeholder="请输入文章标题" />)}
            </FormItem>
          </Row>
          <Row>
         类型：
          </Row>
          <Row>
            <FormItem>
              {getFieldDecorator('articleType', {
                initialValue: `${news.articleType || '数字媒体技术'}`,
            rules: [{ required: true, message: '请选择将要生成文章的类型!' }]
          })(<Select>
            <Option value="campusCulture">校园文化</Option>
            <Option value="news">新闻通知</Option>
            <Option value="profileIntroduction">内容简介</Option>
          </Select>)}
            </FormItem>
          </Row>
        </Form>


        <Row>
         正文：
        </Row>
        <div className="article">
          <div className="postArticle_content">
            <BraftEditor {...editorProps} />
          </div>
        </div>
        <Row>
          {id ? <Button onClick={this.edit} className="postArticle_subButton" type="primary">编辑文章</Button> :
          <Button onClick={this.submit} className="postArticle_subButton" type="primary">提交文章</Button>}
        </Row>
      </div>

    )
  }
}
const mapStateToProps = ({ createNews }) => ({
  createNews
});
export default Form.create()(connect(mapStateToProps)(CreateNews))
