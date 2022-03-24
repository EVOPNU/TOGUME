DROP TABLE IF EXISTS accounts CASCADE;
DROP TABLE IF EXISTS codes CASCADE;
DROP TABLE IF EXISTS publics CASCADE;
DROP TABLE IF EXISTS in_publics CASCADE;
DROP TABLE IF EXISTS invitations CASCADE;
DROP TABLE IF EXISTS news CASCADE;
DROP TABLE IF EXISTS images CASCADE;
DROP TABLE IF EXISTS messages CASCADE;
DROP TABLE IF EXISTS chats CASCADE;
DROP TABLE IF EXISTS chat_members CASCADE;

CREATE TABLE accounts(
    id int primary key ,
    email varchar(150),
    password varchar(255),
    firstName varchar(255),
    lastName varchar(255),
    thirdName varchar(255),
    birthDay timestamp,
    groupUniversity varchar(255),
    faculty varchar(255),
    nickName varchar(255),
    statusInProfile varchar(255),
    countOfFriends integer,
    countOfFollowers integer,
    countOfPhoto integer,
    countOfPosts integer,
    mainPhoto varchar(255),
    dt_create timestamp NOT NULL DEFAULT NOW()
);
CREATE TABLE codes(
    id int primary key ,
    email varchar(150),
    code integer,
    dt_create timestamp NOT NULL DEFAULT NOW()

);
CREATE TABLE publics(
    id int  primary key ,
    name varchar(45),
    description varchar(455),
    access varchar(45),
    amount integer
);
CREATE TABLE in_publics(
    public_id int not null ,
    user_id int not null ,
    role varchar(45),
    primary key (public_id, user_id),
    CONSTRAINT FK_users_public_user_id
        FOREIGN KEY (user_id) references accounts (id),
    CONSTRAINT FK_users_public_public_id
        FOREIGN KEY (public_id) references publics (id)
);
CREATE TABLE invitations(
    public_id int not null,
    user_id int not null,
    primary key (public_id, user_id),
    CONSTRAINT FK_inv_users_public_user_id
        FOREIGN KEY (user_id) references accounts (id),
    CONSTRAINT FK_inv_users_public_public_id
        FOREIGN KEY (public_id) references publics (id)
);
CREATE TABLE news(
    id int primary key ,
    user_id int not null,
    public_id int not null,
    title varchar(255) null,
    content varchar(255) null,
    dt_create timestamp NOT NULL DEFAULT NOW(),
    CONSTRAINT FK_news_user_id
        FOREIGN KEY (user_id) references accounts (id),
    CONSTRAINT FK_news_public_id
        FOREIGN KEY (public_id) references publics (id)
);

CREATE TABLE images (
    id int primary key ,
    image varchar(255) null,
    news_id int not null ,
    dt_create timestamp NOT NULL DEFAULT NOW(),
    CONSTRAINT FK_images_news_id
        FOREIGN KEY (news_id) references news(id)
);

CREATE TABLE chats(
    id int primary key,
    name varchar(255) null ,
    path varchar(255) null
);

CREATE TABLE messages (
    message_id int primary key,
    chat_id int NOT NULL,
    dt_create timestamp NOT NULL DEFAULT NOW(),
    dt_update timestamp NOT NULL DEFAULT NOW(),
    message varchar(255) NOT NULL,
    user_id int NOT NULL,
    CONSTRAINT FK_message_user_id
        FOREIGN KEY (user_id) references accounts (id),
    CONSTRAINT FK_message_chat_id
        FOREIGN KEY (chat_id) references chats (id)
);

CREATE TABLE chat_members(
  chat_id int not null ,
  user_id int not null,
  primary key (chat_id, user_id),
  CONSTRAINT FK_chat_mem_user_id
      FOREIGN KEY (user_id) references accounts (id),
  CONSTRAINT FK_chat_mem_chat_id
      FOREIGN KEY (chat_id) references chats (id)
);