'use client';
import Image from 'next/image';
import AuthorInfo from './AuthorInfo';
import { useState } from 'react';
import PostDropdown from '../Post/PostDropdown';
import Button from '@/components/common/Button/Button';
import { TextAreaInput } from '@/components/common/Inputs';
import clsx from 'clsx';
import { BoardCommentProps } from '../CardType';

export default function BoardComment({ type, content }: BoardCommentProps) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const toggleDropdown = () => {
    setIsDropDownOpen((prev) => !prev);
  };

  /* Dropdown 수정 */
  const handleEdit = () => {
    setIsEditing(true);
  };

  /* Dropdown 삭제 */
  const handleDelete = () => {
    console.log('삭제 눌렀다.');
  };

  /* 취소 버튼 */
  const handleCancel = () => {
    setIsEditing(false);
  };

  /* 수정 버튼(api 연결 후 변경) */
  const handleEditComment = () => {
    setIsEditing(false);
  };

  return (
    <div
      className={clsx(
        'bg-bg200 relative flex min-h-[81px] w-full max-w-[1200px] flex-col rounded-lg lg:h-[134px]',
        type === 'free' && 'flex-shrink-0 p-4'
      )}
    >
      <div className="text-lg-regular flex w-full items-start justify-between">
        {isEditing ? (
          <div className="relative mt-3 flex h-full w-full items-start">
            <TextAreaInput height="h-[65px]" />
          </div>
        ) : (
          <div
            className={clsx('relative flex w-full items-start', type === 'free' ? 'mt-0' : 'mt-4')}
          >
            <span className="scroll-area mr-2 block max-h-[50px] min-h-[40px] overflow-x-hidden overflow-y-auto pr-6">
              {content}
            </span>
            <Image
              className="absolute top-0 right-0 cursor-pointer"
              src="/icons/kebab.svg"
              alt="Kebab Icon"
              width={16}
              height={16}
              onClick={toggleDropdown}
            />
          </div>
        )}
      </div>

      {isDropDownOpen && (
        <PostDropdown
          type="kebab"
          textJustify="center"
          options={[
            { label: '수정', value: '수정', action: handleEdit },
            { label: '삭제', value: '삭제', action: handleDelete },
          ]}
          isOpen={isDropDownOpen}
          toggleDropdown={toggleDropdown}
          toppercent="30%"
        />
      )}

      <div className="flex flex-grow flex-col justify-end">
        {isEditing ? (
          <div className="mt-3 ml-auto flex">
            <button
              onClick={handleCancel}
              className="text-gray500 h-[32px] w-[48px] bg-transparent text-sm font-semibold"
            >
              취소
            </button>
            <Button size="small" variant="inverse" onClick={handleEditComment}>
              수정하기
            </Button>
          </div>
        ) : (
          <AuthorInfo type="detail" showDivider={type !== 'list'} showLike={type !== 'list'} />
        )}
      </div>
      {type === 'list' && <div className="mt-2 h-[1px] w-full bg-[#F8FAFC1A]"></div>}
    </div>
  );
}
