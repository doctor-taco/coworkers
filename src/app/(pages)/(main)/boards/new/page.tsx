'use client';
import { TextAreaInput } from '@/components/common/Inputs';
import ImgUpload from '@/components/Card/ImgUpload';
import Button from '@/components/common/Button/Button';

export default function CreateBoard() {
  return (
    <div className="my-14 max-h-[841px]">
      {/* 타이틀 + 버튼 */}
      <div className="flex items-center justify-between">
        <p className="text-xl-bold flex">게시글 쓰기</p>
        <div className="relative max-[620px]:hidden">
          <button className="text-lg-semibold bg-primary hover:bg-primary-hover active:bg-primary-pressed max-[620px]:text-md-semibold flex h-12 w-[184px] items-center justify-center rounded-xl text-white max-[620px]:h-8 max-[620px]:w-[100px]">
            등록
          </button>
        </div>
      </div>

      <div className="my-4 mt-10 h-px w-full bg-[#F8FAFC1A]" />

      {/* 제목 + 내용 + 이미지 */}
      <div className="text-lg-medium mt-15 max-h-[713px] flex-col gap-4">
        <div className="flex flex-col gap-4">
          <p>
            <span className="text-tertiary mr-2">*</span>제목{' '}
          </p>
          <input
            type="text"
            placeholder="제목을 입력해주세요."
            className="bg-bg200 border-gray100/10 focus:border-primary hover:border-primary-hover text-4 text-lg-regular placeholder:text-gray500 h-[48px] w-full resize-none rounded-xl border px-4 py-3 focus:outline-none"
          />
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <p>
            <span className="text-tertiary mr-2">*</span>내용{' '}
          </p>
          <TextAreaInput placeholder="내용을 입력해주세요" height="h-[204px]" />
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <p>이미지</p>
          <ImgUpload />
        </div>

        {/* 모바일용 버튼 */}
        <div className="mt-10 flex justify-center min-[620px]:hidden">
          <Button size="large">등록</Button>
        </div>
      </div>
    </div>
  );
}
