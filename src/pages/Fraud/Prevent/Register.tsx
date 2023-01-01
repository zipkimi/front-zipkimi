import React, { useMemo, useState } from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import OriginalBtn from "../../../components/OriginalBtn";

const Register = () => {
  const [contents, setContents] = useState("");
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");

  // Quill 모듈
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike"],
          ["image"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ color: [] }, { background: [] }],
          [{ font: [] }],
          [{ align: [] }],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    []
  );

  // 이미지 제어
  function imageHandler() {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", ".png,.jpg,.jpeg");
    input.click();
    // input.onchange = (e: any) => {
    //   const files = e.target.files;
    //   const file = files[0];
    //   const fileName = file.name;
    //   console.log(fileName);
    //   const date = moment().format('YYYYMM');
    //   const timeStamp = Date.now();
    //   const fileNameSplit = fileName.split('.');
    //   const extension = fileNameSplit[fileNameSplit.length - 1]
    //   new AWS.S3.ManagedUpload({
    //     params: {
    //       Bucket: `${AWS_BUCKET}-public`,
    //       Key: `admin/notice/editor/${user.adminId}_${timeStamp}.${extension}`,
    //       Body: file,
    //       ACL: 'public-read'
    //     }
    //   }).promise().then((res) => {
    //     const range = this.quill.getSelection();
    //     this.quill.insertEmbed(range.index, 'image', res.Location);
    //   }).catch((e) => {
    //     ApiErrorHandler.allCode(e);
    //   });
    // };
  }

  const onCancel = () => {
    window.history.back();
  };

  return (
    <section>
      <HighlightH2>
        <span>사기예방법 공유</span>
      </HighlightH2>
      <article>
        <TitleH3>사기예방법 공유 글 작성</TitleH3>
        <SubTitleP>유저에게 공유할 소중한 내용을 작성해주세요.</SubTitleP>
        <ContentsWrapper>
          <div>
            <label htmlFor="inp_title">제목</label>
            <TitleInput
              type="text"
              id="inp_title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="inp_subTitle">소제목</label>
            <SubTitleInput
              type="text"
              id="inp_subTitle"
              value={subTitle}
              onChange={(e) => setSubTitle(e.target.value)}
            />
          </div>
          <label htmlFor="inp_contents">본문</label>
          <CustomQuill
            theme="snow"
            modules={modules}
            value={contents}
            onChange={(content) => {
              setContents(content);
            }}
            id="inp_contents"
          />
        </ContentsWrapper>
        <BtnWrapper>
          <OriginalBtn onClick={onCancel}>취소</OriginalBtn>
          <OriginalBtn onClick={() => {}}>작성하기</OriginalBtn>
        </BtnWrapper>
      </article>
    </section>
  );
};

export default Register;

const HighlightH2 = styled.h2`
  border-bottom: 1px solid black;
  text-align: center;

  span {
    display: inline-block;
    border-bottom: 2px solid ${({ theme }) => theme.COLOR.original};
    padding-bottom: 5px;
    font-size: 1.3rem;
    color: ${({ theme }) => theme.COLOR.original};
  }
`;

const TitleH3 = styled.h3`
  font-size: 1.6rem;
  text-align: center;
  padding: 1rem 0;
`;

const SubTitleP = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.COLOR.secondWhite};
`;

const ContentsWrapper = styled.div`
  max-width: 800px;
  margin: 4rem auto;

  label {
    display: block;
    font-size: 1.3rem;
    text-align: center;
    margin: 1rem 0 0.5rem;
  }

  input {
    display: block;
    border: 1px solid #cccccc;
    border-radius: ${({ theme }) => theme.ROUND.xs};
    width: 100%;
    height: 2.5rem;
    padding: 0 5px;
    text-align: center;
  }
`;

const TitleInput = styled.input`
  font-size: 1.6rem;
`;

const SubTitleInput = styled.input`
  color: ${({ theme }) => theme.COLOR.secondWhite};
`;

const CustomQuill = styled(ReactQuill)`
  height: 500px;

  > .ql-container.ql-editor {
    overflow-y: scroll;
  }
`;

const BtnWrapper = styled.div`
  max-width: 800px;
  margin: auto;
  text-align: right;

  button:not(button:last-child) {
    margin-right: 10px;
  }
`;
