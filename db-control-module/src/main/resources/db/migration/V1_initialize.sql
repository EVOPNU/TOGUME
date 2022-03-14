DROP TABLE IF EXISTS accounts CASCADE;
DROP TABLE IF EXISTS codes CASCADE;
DROP TABLE IF EXISTS custom_groups CASCADE;
DROP TABLE IF EXISTS in_groups CASCADE;
DROP TABLE IF EXISTS invitations CASCADE;

CREATE TABLE accounts(
                        id serial primary key ,
                        email varchar(150),
                        password varchar(255),
                        firstName varchar(255),
                        lastName varchar(255),
                        thirdName varchar(255),
                        birthDay datetime,
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
                     id serial primary key ,
                     email varchar(150),
                     code integer,
                     dt_create timestamp NOT NULL DEFAULT NOW()

);
CREATE TABLE custom_groups(
                       id serial primary key ,
                       name varchar(45),
                       description varchar(455),
                       access varchar(45),
                       amount integer
);
CREATE TABLE in_groups(
                          group_id integer,
                          user_id integer,
                          role varchar(45),
                          primary key (group_id, user_id),
                          CONSTRAINT FK_users_group_user_id
                              FOREIGN KEY (user_id) references accounts (id),
                          CONSTRAINT FK_users_groups_group_id
                              FOREIGN KEY (group_id) references custom_groups (id)
);
CREATE TABLE invitations(
                            group_id int not null,
                            user_id int not null,
                            primary key (group_id, user_id),
                            CONSTRAINT FK_users_group_user_id
                                FOREIGN KEY (user_id) references accounts (id),
                            CONSTRAINT FK_users_groups_group_id
                                FOREIGN KEY (group_id) references custom_groups (id)
);
CREATE TABLE news(
    id serial primary key ,
    user_id int not null,
    group_id int not null,
    title varchar(255),
    content varchar(255),
    dt_create timestamp NOT NULL DEFAULT NOW(),
    CONSTRAINT FK_news_user_id
        FOREIGN KEY (user_id) references accounts (id),
    CONSTRAINT FK_news_group_id
        FOREIGN KEY (group_id) references custom_groups (id)
);

CREATE TABLE images (
    id serial primary key ,
    image varchar(255),
    news_id int not null ,
    dt_create timestamp NOT NULL DEFAULT NOW(),
    CONSTRAINT FK_images_news_id
        FOREIGN KEY (news_id) references news(id)
);
CREATE TABLE messages (
                                message_id serial primary key,
                                chat_id bigint NOT NULL,
                                dt_create timestamp NOT NULL DEFAULT NOW(),
                                dt_update timestamp NOT NULL DEFAULT NOW(),
                                message varchar(255) NOT NULL,
                                user_id bigint NOT NULL,
                                CONSTRAINT FK_message_user_id
                                    FOREIGN KEY (user_id) references accounts (id)
);
CREATE TABLE chats(
  id serial primary key,
  name varchar(255),
  path varchar(255)
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