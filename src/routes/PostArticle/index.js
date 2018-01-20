import React from 'react'
import { Row, Col, Input, Button, Form } from 'antd'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'
import { connect } from 'dva';
import './index.css'

const FormItem = Form.Item;

const PostArticle = ({ dispatch, form }) => {
  const { getFieldDecorator, getFieldValue } = form;
  const handleHTMLChange = (htmlContent) => {
    dispatch({ type: 'header/saveHTMLContent', payload: htmlContent })
  }
  const submit = () => {
    const title = form.getFieldValue('articleTitle')
  }
  const editorProps = {
    contentFormat: 'html',
    placeholder: '',
    initialContent: '',
    onHTMLChange: handleHTMLChange,
    viewWrapper: '.article',
    // 增加自定义预览按钮
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
      <Row>
       标题：
      </Row>
      <Row>
        <Form>
          <FormItem>
            {getFieldDecorator('articleTitle', {
          rules: [{ required: true, message: '请输入文章标题!' }]
        })(<Input style={{ textAlign: 'center', marginBottom: '5px' }} placeholder="请输入文章标题" />)}
          </FormItem>
        </Form>

      </Row>
      <Row>
       正文：
      </Row>
      <div className="article">
        <div className="postArticle_content">
          <BraftEditor {...editorProps} />
        </div>
      </div>
      <Row>
        <Button onClick={submit} className="postArticle_subButton" type="primary">提交文章</Button>
      </Row>
    </div>

  )
}
export default Form.create()(connect()(PostArticle))
