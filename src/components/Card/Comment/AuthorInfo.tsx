'use client';

import Image from 'next/image';
import { useState } from 'react';
import IconHeart from '@/assets/icons/IconHeart';
import { AuthorInfoProps } from '../CardType';

export default function AuthorInfo({
  type,
  showDivider = true,
  showLike = true,
  showDate = true,
  authorName = '우지은',
  date = '2024.07.25',
  showKebab = false,
  showComment = false,
}: AuthorInfoProps) {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  // 상세 카드 일때만
  if (type === 'detail') {
    return (
      <div className="mt-3 flex w-full items-center justify-between text-[10px] sm:text-sm">
        {/* 프로필 + 이름 */}
        <div className="flex items-center gap-[7px]">
          <Image src="/icons/initialprofile.svg" alt="프로필 사진" width={32} height={32} />
          {authorName && <span className="block">{authorName}</span>}
        </div>

        {/* 오른쪽: 날짜 */}
        {showDate && <span className="text-gray400 whitespace-nowrap">{date}</span>}
      </div>
    );
  }

  // 기본
  return (
    <div className="mt-3 flex w-full items-center text-[10px] sm:text-sm">
      {/* 프로필 + 이름 + 구분선 */}
      <div className="flex items-center gap-[7px]">
        <Image src="/icons/initialprofile.svg" alt="프로필 사진" width={32} height={32} />
        {authorName && <span className="block">{authorName}</span>}
        {showDivider && <div className="h-[12px] border-l-2 border-slate-700"></div>}
      </div>

      {/* 날짜 */}
      {showDate && (
        <span className={`text-gray400 whitespace-nowrap ${showDivider ? 'ml-[10px]' : 'ml-auto'}`}>
          {date}
        </span>
      )}

      {/* 좋아요, 댓글, 케밥 아이콘 */}
      <div className="ml-auto flex items-center">
        {showComment && (
          <div className="mr-4 flex">
            <Image
              className="mr-1.5 cursor-pointer"
              src="/icons/comment.svg"
              alt="comment Icon"
              width={16}
              height={16}
            />
            <p className="text-gray400">3</p>
          </div>
        )}

        {showLike && (
          <div className="flex items-center">
            <IconHeart
              className="mr-1.5 cursor-pointer"
              fillColor={isLiked ? 'var(--color-danger)' : 'none'}
              strokeColor={isLiked ? 'var(--color-danger)' : 'var(--color-gray500)'}
              onClick={toggleLike}
            />
            <span className="text-gray400">9999+</span>
          </div>
        )}

        {showKebab && (
          <Image
            className="ml-1 cursor-pointer"
            src="/icons/kebab.svg"
            alt="Kebab Icon"
            width={16}
            height={16}
          />
        )}
      </div>
    </div>
  );
}
