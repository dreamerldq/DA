import React from 'react'
import { Row, Col, Input, Button, Form } from 'antd'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'
import { connect } from 'dva';
import './index.css'

const FormItem = Form.Item;

const ArticleEdit = ({ dispatch, form, type }) => {
  const { getFieldDecorator, getFieldValue } = form;
  const handleHTMLChange = (htmlContent) => {
    dispatch({ type: 'postArticle/saveArticleContent', payload: htmlContent })
  }
  const createArticle = () => {
    const title = form.getFieldValue('articleTitle')
    dispatch({ type: 'postArticle/createArticle', payload: title })
  }
  const updateArticle = () => {
    const title = form.getFieldValue('articleTitle')
    dispatch({ type: 'postArticle/updateArticle', payload: title })
  }
  const editorProps = {
    contentFormat: 'html',
    placeholder: '',
    initialContent: '<h1>新的内容</h1>',
    onHTMLChange: handleHTMLChange,
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
      <Row>
       标题：
      </Row>
      <Row>
        <Form>
          <FormItem>
            {getFieldDecorator('articleTitle', {
          initialValue: '数字艺术系',
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
        {type === 'edit' ?
          <Button onClick={createArticle} className="postArticle_subButton" type="primary">提交文章</Button> :
          <Button onClick={updateArticle} className="postArticle_subButton" type="primary">更新文章</Button>
          }
      </Row>
    </div>

  )
}
export default Form.create()(connect()(ArticleEdit))
