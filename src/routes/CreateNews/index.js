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
  render() {
    const { form, dispatch } = this.props
    const { getFieldDecorator, getFieldValue } = form;

    const editorProps = {
      contentFormat: 'html',
      placeholder: '',
      initialContent: '',
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
            rules: [{ required: true, message: '请选择将要生成文章的类型!' }]
          })(<Input style={{ textAlign: 'center', marginBottom: '5px' }} placeholder="请输入文章标题" />)}
            </FormItem>
          </Row>
          <Row>
         类型：
          </Row>
          <Row>
            <FormItem>
              {getFieldDecorator('articleType', {
            rules: [{ required: true, message: '请输入文章标题!' }]
          })(<Select>
            <Option value="campusCulture">校园文化</Option>
            <Option value="news">新闻通知</Option>
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
          <Button onClick={this.submit} className="postArticle_subButton" type="primary">提交文章</Button>
        </Row>
      </div>

    )
  }
}
export default Form.create()(connect()(CreateNews))
