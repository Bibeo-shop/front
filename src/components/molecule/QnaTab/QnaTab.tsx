import { Button } from '@/components/ui/button'
import Typography from '@/components/atom/Typography/Typography'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'
import { ReplyIcon } from '@/components/atom/svg'
import clsx from 'clsx'
import cn from './QnaTab.module.scss'

const QnaTab = () => {
  const isAdmin = true;

  return (
    <div className={cn.qnaTab}>
      <div className={cn.textarea}>
        <Textarea placeholder="내용을 입력해주세요." />
        <div className={cn.btnWrap}>
          <Button size="lg" variant="dark" className={cn.button}>
            등록
          </Button>
          <Button size="lg" variant="darkoutline" className={cn.button}>
            취소
          </Button>
        </div>
      </div>
      <Separator />
      <div>
        <div className={cn.btnWrap}>
          <Button size="lg" variant="dark" className={cn.button}>
            문의하기
          </Button>
          <Button size="lg" variant="darkoutline" className={cn.button}>
            내가쓴글
          </Button>
        </div>
        <div className={cn.qnaContainer}>
          <div className={cn.qnaWrap}>
            <div className={cn.userInfoWrap}>
              <div>
                <Typography size="12" weight="800" className={cn.userName}>
                  닉네임12
                </Typography>
                <div>
                  <Typography
                    size="12"
                    weight="600"
                    color="gray-strong"
                    className={cn.date}
                  >
                    2024.04.17
                  </Typography>
                  <Typography size="12" weight="800" color="primary">
                    답변완료
                  </Typography>
                </div>
              </div>
              <div className={clsx(cn.btnAdminWrap, { [cn.isAdmin]: isAdmin })}>
                <Button
                  variant="darkoutline"
                  size="sm"
                  className="border-ghost"
                >
                  답글
                </Button>
                <Button
                  variant="darkoutline"
                  size="sm"
                  className="border-ghost"
                >
                  수정
                </Button>
                <Button
                  variant="darkoutline"
                  size="sm"
                  className="border-ghost"
                >
                  삭제
                </Button>
              </div>
            </div>
            <div className={cn.contentArea}>
              <div className={cn.content}>
                <Typography size="12" weight="800">
                  너무예뻐용~~어쩌고
                </Typography>
              </div>
            </div>
          </div>
          <div className={cn.replyContainer}>
            <ReplyIcon />
            <div className={clsx(cn.qnaWrap, cn.admin)}>
              <div className={cn.userInfoWrap}>
                <div>
                  <Typography size="12" weight="800" className={cn.userName}>
                    관리자
                  </Typography>
                  <div>
                    <Typography
                      size="12"
                      weight="600"
                      color="gray-strong"
                      className={cn.date}
                    >
                      2024.04.17
                    </Typography>
                  </div>
                </div>
                <div className={clsx(cn.btnAdminWrap, { [cn.isAdmin]: isAdmin })}>
                  <Button
                    variant="darkoutline"
                    size="sm"
                    className="border-ghost"
                  >
                    수정
                  </Button>
                  <Button
                    variant="darkoutline"
                    size="sm"
                    className="border-ghost"
                  >
                    삭제
                  </Button>
                </div>
              </div>
              <div className={cn.contentArea}>
                <div className={cn.content}>
                  <Typography size="12" weight="800">
                    금방와용
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QnaTab
