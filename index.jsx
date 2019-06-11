/**
 * @description
 * @author Freddie
 * @since 10/06/2019
 */

import React, { PureComponent } from 'react';
import { Upload, Button, Icon, message } from 'antd';
import SubmitInfo from './SubmitInfo';
import * as XLSX from 'xlsx';

class Main extends PureComponent {

  constructor (props) {
      super (props);
      this.printRef = React.createRef();
  }

  formatExcelTime (numb, format) {
    let time = new Date((numb - 1) * 24 * 3600000 + 1)
    time.setYear(time.getFullYear() - 70)
    let year = time.getFullYear() + ''
    let month = time.getMonth() + 1 + ''
    let date = time.getDate() + ''
    if (format && format.length === 1) {
        return year + format + month + format + date
    }
    return year + '-' +  (month < 10 ? '0' + month : month) + '-' + (date < 10 ? '0' + date : date)
  }

  handleChange = info => {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      // 获取上传的文件对象
      const files = info.fileList;
      // 通过FileReader对象读取文件
      const fileReader = new FileReader();
      fileReader.onload = event => {
        try {
          const { result } = event.target;
          // 以二进制流方式读取得到整份excel表格对象
          const workbook = XLSX.read(result, { type: 'binary' });
          // 存储获取到的数据
          let data = [];
          // 遍历每张工作表进行读取（这里默认只读取第一张表）
          for (const sheet in workbook.Sheets) {
            // esline-disable-next-line
            if (workbook.Sheets.hasOwnProperty(sheet)) {
                // 利用 sheet_to_json 方法将 excel 转成 json 数据
                data = data.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
                // break; // 如果只取第一张表，就取消注释这行
            }
          }
          // 处理需要展示的表格数据
          data.forEach(item => {
              item['死亡日期'] = this.formatExcelTime(item['死亡日期']);
          });
          this.printRef.showModal();
          console.log(data, 'data');
          message.success('上传成功！') //这里用了antd中的message组件
        } catch (e) {
            // 这里可以抛出文件类型错误不正确的相关提示
            message.error('文件类型不正确！');
        }
      };
      // 以二进制方式打开文件
      fileReader.readAsBinaryString(files[0].originFileObj);
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }


  render() {
    const props = {
      name: 'file',
      accept: '.xlsx, .xls',
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      headers: {
        authorization: 'authorization-text',
      },
      showUploadList: false
    };

    return (
      <section>
        <Upload {...props} onChange={this.handleChange}>
          <Button>
            <Icon type="upload" />大学生就业名单导入
          </Button>
        </Upload>
        <SubmitInfo ref={this.printRef}></SubmitInfo>
      </section>
    );
  }
}

export default Main;
