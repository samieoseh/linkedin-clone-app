import React from "react";
import styled from "styled-components";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import SendIcon from "@mui/icons-material/Send";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

function PostCard() {
  return (
    <Card>
      <CardTitle>
        <ProfileImg>
          <img src="../images/user.svg" alt="profile img" />
        </ProfileImg>
        <ProfileDetail>
          <p>Samuel Oseh</p>
          <p>Aspiring Web Developer</p>
        </ProfileDetail>
      </CardTitle>
      <CardBody>
        <BodyText>
          <p>
            Prophet is a method for predicting time series data that uses an
            additive model to suit non-linear trends with seasonality that
            occurs annually, monthly, daily, and on weekends as well as during
            holidays. Strongly seasonal time series and multiple seasons of
            historical data are ideal for it. Prophet can handle outliers
            generally and is robust to missing data and changes in the trend
          </p>
        </BodyText>
        <BodyImg>
          <img src="../images/post-image.jpeg" alt="" />
        </BodyImg>
      </CardBody>
      <CardReaction>
        <Reaction>
          <CustomLikeIcon />
          <p>Like</p>
        </Reaction>
        <Reaction>
          <CustomCommentIcon />
          <p>Comment</p>
        </Reaction>
        <Reaction>
          <CustomRepostIcon />
          <p>Repost</p>
        </Reaction>
        <Reaction>
          <CustomSendIcon />
          <p>Send</p>
        </Reaction>
      </CardReaction>
    </Card>
  );
}

export default PostCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  flex: 1;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 1px 1px 2px rgba(1, 1, 1, 0.3);
`;

const CardTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 8px;
`;

const ProfileImg = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  position: relative;
  overflow: hidden;
  margin-right: 10px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const ProfileDetail = styled.div`
  p:first-child {
    font-size: 14px;
    font-weight: 600;
  }
  p:last-child {
    font-size: 13px;
    font-weight: 300;
  }
`;

const BodyText = styled.div`
  padding: 8px;
  p {
    line-height: 1.5;
    font-size: 12px;
    text-overflow: ellipsis;
  }
`;

const BodyImg = styled.div`
  height: auto;
  width: 100%;
  position: relative;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

const CardReaction = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  margin: 8px 25px;
  padding: 4px 0;
  column-gap: 5px;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
    column-gap: 2px;
    margin: 0;
  }
`;

const Reaction = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px 7px;
  justify-content: center;
  flex: 1;
  transition: all 250ms ease-in;

  p {
    padding: 0 10px;
    font-size: 0.8em;
    font-family: "Roboto";
    font-weight: 600;
    color: #666;

    @media (max-width: 768px) {
      font-size: 0.6em;
    }
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 8px;
  }
`;

const CardBody = styled.div``;

const CustomLikeIcon = styled(ThumbUpOffAltIcon)`
  fill: #666 !important;

  @media (max-width: 768px) {
    width: 1em !important;
    height: 1em !important;
  }
`;

const CustomCommentIcon = styled(CommentIcon)`
  fill: #666 !important;
`;

const CustomRepostIcon = styled(CompareArrowsIcon)`
  fill: #666 !important;
`;

const CustomSendIcon = styled(SendIcon)`
  fill: #666 !important;
`;
