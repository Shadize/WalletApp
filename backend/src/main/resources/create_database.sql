create database wallet;
create user wallet_user with connection limit -1 superuser login password 'P@ssword';
grant all privileges  on database wallet to wallet_user;