-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 20, 2018 at 11:36 AM
-- Server version: 5.7.24-0ubuntu0.18.04.1
-- PHP Version: 7.2.10-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `react_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2016_06_01_000001_create_oauth_auth_codes_table', 1),
(4, '2016_06_01_000002_create_oauth_access_tokens_table', 1),
(5, '2016_06_01_000003_create_oauth_refresh_tokens_table', 1),
(6, '2016_06_01_000004_create_oauth_clients_table', 1),
(7, '2016_06_01_000005_create_oauth_personal_access_clients_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `client_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('05cb58fd3787406b3f210cc274d50e5e7fe76c964df76bc9851b21d5e323090a45bc72e968c46982', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-19 19:52:21', '2018-12-19 19:52:21', '2019-12-19 14:52:21'),
('065ff984993ddbf7b1b7ecfa615cf69d4e66dc9d1442feb1835d035055d0928f82d38f2259700870', 4, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 16:20:14', '2018-12-20 16:20:14', '2019-12-20 11:20:14'),
('0c70cf98d81b7f2e5167bfd7b293cee5656aff84a56c533f11c6da99fd9e3c8731412d3f3464bd26', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 16:45:26', '2018-12-20 16:45:26', '2019-12-20 11:45:26'),
('149a727bacdb1557eba9899a12a94eab02f8af424d7fa015dd295a8eb3c134529ff166afc1cf0ca6', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-19 19:52:20', '2018-12-19 19:52:20', '2019-12-19 14:52:20'),
('15bce8b3eebeff39d905c5312c76e495102936ac5407d15b5f679422fbe56bf3ab28cf563347311a', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 16:01:19', '2018-12-20 16:01:19', '2019-12-20 11:01:19'),
('1e725856f31a3d3bcfb91db12aa9a30278a70112013d7f6597bd4fd20598b2f286fc87b2be2d1cfd', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 20:34:57', '2018-12-20 20:34:57', '2019-12-20 15:34:57'),
('2e99a7c7b262c479903f3f75dde353ef4aef9a7c2668c6764a14141e0b4ab1f63b27b4ba05cd688e', 14, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 21:17:52', '2018-12-20 21:17:52', '2019-12-20 16:17:52'),
('33f912a06bf1b156f7a47d6c1fe958796b760e6a06a22d2adcfad007e6ae5304540b0e1be32e42bb', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 20:48:36', '2018-12-20 20:48:36', '2019-12-20 15:48:36'),
('3735572259a3bda2d99d613e54451191724f2472a5d487d9344497aeca1dc2e3483d763d35ca6268', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-19 20:22:14', '2018-12-19 20:22:14', '2019-12-19 15:22:14'),
('3deca0c0196230cb63b07ca8be3a7f074f4a366da70958d0e2f4dc0d72d12ed566ef1aa48b756297', 10, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 20:53:10', '2018-12-20 20:53:10', '2019-12-20 15:53:10'),
('3dee1f11ecd3ac1ef68f4353b31936fba80d694ce55b250c5f06c18bfbf65cc22138a6d19836bed5', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 16:53:00', '2018-12-20 16:53:00', '2019-12-20 11:53:00'),
('45bc8fc04fe24991e0cf34c2ab5fb1a38b6dfabf3e3bc45ec8fa2f5f46ccced60e4f9eb0951dbff3', 6, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 18:24:48', '2018-12-20 18:24:48', '2019-12-20 13:24:48'),
('4641a22341e281d683bf5a60abe4e61638deec885db0fa9f792bfcb83d87552b72d9d3603a6e3eeb', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 16:40:53', '2018-12-20 16:40:53', '2019-12-20 11:40:53'),
('4ae49931a252ba832c833bdd0fdc53a1b991362a6d8674281cafceb1052efe49a5b68d7e7fbe4a14', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 20:49:30', '2018-12-20 20:49:30', '2019-12-20 15:49:30'),
('590512bf6065a846bb56f51bc979c4d3869f9cd2f5c75ede91d4e02dd9dcbe920f66734cf941eca7', 8, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 20:48:28', '2018-12-20 20:48:28', '2019-12-20 15:48:28'),
('59fe868357ea262ac9caba5231a92ec52f7bccc46b585d983f17ad86d67239f3dc9b90fc39903d67', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 16:01:29', '2018-12-20 16:01:29', '2019-12-20 11:01:29'),
('5c1ad99a9a103fa6c22703e7daa4270f11ea49ce72ec5a06881bcf35185f9fcfe3c33a849b18ffc7', 2, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-19 19:35:52', '2018-12-19 19:35:52', '2019-12-19 14:35:52'),
('6269aded4f65759eaca5b3f53729a5388eda0100b861035920597b44603539d5eaa8c4f57d8d5ab9', 12, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 20:57:29', '2018-12-20 20:57:29', '2019-12-20 15:57:29'),
('641a5a3968e73e17ad67e695fc05eb910edf5460ffd430d00a40ced2e5dbd137d6d8c4f1c6f5bdca', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 15:54:38', '2018-12-20 15:54:38', '2019-12-20 10:54:38'),
('64c0d710d2cb7312b9f1872c7f731f3a9fe05946e681070520e84ab945df82eb403576eee0f3b8bf', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 20:10:16', '2018-12-20 20:10:16', '2019-12-20 15:10:16'),
('6b72939e0e7b05fbcebd1354dcad378aa2a1fd2d558f9b1a1b0368f858f16b97b52776ef494364b3', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 16:01:06', '2018-12-20 16:01:06', '2019-12-20 11:01:06'),
('6c9c6fab635d8a49ddb36d4abc84fd607232f387a0492f1b96279a39be1856c011b7eb2aea189cfb', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 15:56:12', '2018-12-20 15:56:12', '2019-12-20 10:56:12'),
('71996f38c70f0e4ca61922f465a7db30925470e79040a0ef2cfbb3492bdd765f48de12b86d91f47f', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 16:03:41', '2018-12-20 16:03:41', '2019-12-20 11:03:41'),
('7e9c293ba7a344b772c1dca860fa25fae6aa962dc22bcdf18f6d9442cfe11c9770c9840bc6d957c3', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-19 19:44:10', '2018-12-19 19:44:10', '2019-12-19 14:44:10'),
('7ebe8247fa8c3caeab958ed9fbafea630600fb38968394df1e894339e7f42f2de73ff7835bc40164', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 16:45:01', '2018-12-20 16:45:01', '2019-12-20 11:45:01'),
('7f4c1b2fb92f97424ff2019eb367e7b79daffbd5091730a9ee2d8fdaaeae735b930d90ec7562dbde', 1, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-19 19:34:22', '2018-12-19 19:34:22', '2019-12-19 14:34:22'),
('889df63da2be0a2bd72550d03036b10023fc6807950dea72599555f7f8e47965a50be33608f26cb9', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 20:27:44', '2018-12-20 20:27:44', '2019-12-20 15:27:44'),
('8b1c9af61ddc4496b73b9398bb7d59820d7308c15e90e7d21c238f1d8318f4e849d4053ae9ca18ad', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 20:48:08', '2018-12-20 20:48:08', '2019-12-20 15:48:08'),
('8ecd010e6e4949d4fd336d29fe3af939eaec1efb304ff8bcd9329fe64ca4105d50b9d8d84b62c13d', 7, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 20:27:39', '2018-12-20 20:27:39', '2019-12-20 15:27:39'),
('8f88d2bef962f892af68a3e6697c816005a5fbae51d521bc21f6a580e712f8d0d9589ef8cdf06743', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 16:48:14', '2018-12-20 16:48:14', '2019-12-20 11:48:14'),
('901c5918a4af33a972660717c2f2ac32b27c7cc8ffef02137ca45dfc2dd1bf4275208449116bfeee', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 20:27:39', '2018-12-20 20:27:39', '2019-12-20 15:27:39'),
('977916f116896ae434e540a2da227f70f173d40fb9189a201415d2c47100a39a8d905ca5f7d65080', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 15:46:19', '2018-12-20 15:46:19', '2019-12-20 10:46:19'),
('98a75d49b2d575bf1f482283fdd0560ff4efeed42699d5869359d60f70b57f81ccdc1bfb91790832', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 16:47:54', '2018-12-20 16:47:54', '2019-12-20 11:47:54'),
('9fb1e46f0a5d8dc68ee3239a1a474e0451477666508e44dbd25d3707616d7c34a5baaf9e129bb250', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 14:50:15', '2018-12-20 14:50:15', '2019-12-20 09:50:15'),
('a47ebbe6ff765f33d569127cd5205208d04956c3ff6cb8039b0f9991fcfdf60de8a099158d0ce060', 11, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 20:54:03', '2018-12-20 20:54:03', '2019-12-20 15:54:03'),
('a9efba3662ff7693f9f2971e310feea0c71de573f704bf7e406086c7cb3ef5656b6dca817a8097e1', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 16:02:51', '2018-12-20 16:02:51', '2019-12-20 11:02:51'),
('ac5af9d891635b533409edaef044068f695e764e623d128e5101bbb1325e2dae8328533766eba924', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 18:24:12', '2018-12-20 18:24:12', '2019-12-20 13:24:12'),
('b083cc51f7d2b0559c5570fb1d8d330b3723650c70e090509ed581a2fd8276400616d026313f570b', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 20:52:12', '2018-12-20 20:52:12', '2019-12-20 15:52:12'),
('b2b3b6abb79a3a6fc4f12495b61d7a6f7db5075aa1b9ead88864b506f8b042392c73c0c548cf94d6', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 16:54:01', '2018-12-20 16:54:01', '2019-12-20 11:54:01'),
('b3d5ce11146763e8ab9ce7791855ea4d14a86a7f7bddf7dba96e758e395356f4104af4b9abd916dc', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 14:45:48', '2018-12-20 14:45:48', '2019-12-20 09:45:48'),
('b41050e73708f86564fdb2db9f05a8bc14066894cc4cdf905de85f63b781421cc74e482100698e2e', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 16:49:09', '2018-12-20 16:49:09', '2019-12-20 11:49:09'),
('b4f15c7035198106ee74b8b9b029d01d7fb3fb69ee9f4d956e82bd71350731b23d28dc4f53a378e2', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 16:53:48', '2018-12-20 16:53:48', '2019-12-20 11:53:48'),
('b7f038036c7d013162ab61e92060944c628cfe82dd8564e62751c859a5a11aea242429aa9549e5c1', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 14:46:40', '2018-12-20 14:46:40', '2019-12-20 09:46:40'),
('b97a99c59f8b3bc544cdd46a02020b106650e14f6d4e0bcea6b6d3546b5fca79ebb4f74a9715fc4a', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 16:46:36', '2018-12-20 16:46:36', '2019-12-20 11:46:36'),
('bdca108d93aaa9ee009e45755df5572461adb666c8038d08e6de7cc2dcf527ab6003d45611428b67', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 20:32:58', '2018-12-20 20:32:58', '2019-12-20 15:32:58'),
('bfa86c88f14de0c2a989448f9ba7bde7fbad72d85c958cc4501311a02fc837594e956b3708a94351', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 15:52:11', '2018-12-20 15:52:11', '2019-12-20 10:52:11'),
('c606d86b4eff76661bcd491c61712333abc405cdd22f5bf89ded2b87daf9826a0bf04ab384a1b512', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 16:53:09', '2018-12-20 16:53:09', '2019-12-20 11:53:09'),
('cee96442e90807e27ea3911e679d7e7927ebb088e44bf4a4a86f8323ebf147bc426ba8b3ee7201a6', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 14:06:54', '2018-12-20 14:06:54', '2019-12-20 09:06:54'),
('d39862147d5a198acc855acea16d718f92d6cbb266b824f3ab476eb7634d7d5df060ecc5ca6ac621', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 16:14:39', '2018-12-20 16:14:39', '2019-12-20 11:14:39'),
('d5d37120246cad017a3e1a7844004f86e5bd66f3444cd014c013f3ecbccaa1134f197e479d1c5e20', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 20:51:26', '2018-12-20 20:51:26', '2019-12-20 15:51:26'),
('d8156bc3f95df46dd92153a8f5f3ca9ed4cdec217a72e00d9c08e7e27b02c10354b9ae494be2f072', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-19 19:52:16', '2018-12-19 19:52:16', '2019-12-19 14:52:16'),
('d8fb48d7f79595493d77fe897f3f815bc29ea41dbcbe2f7641e0c3d87e53f2c94e9d74f033bd3932', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 16:41:33', '2018-12-20 16:41:33', '2019-12-20 11:41:33'),
('dbc5b8dd591434dd21674230c53ab4273419cc7b470cc18880016894457f7d89f886e0e048e83899', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 15:12:23', '2018-12-20 15:12:23', '2019-12-20 10:12:23'),
('de8f8f790b519ed79e9f6a2641a16949d8fcd21ed359dcfab1ee76c3f8e552535fc054ad291184f0', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 16:43:10', '2018-12-20 16:43:10', '2019-12-20 11:43:10'),
('e30f147a1268fead8d5eb715d42a137317792e1ee225938fd01d97a2ac77483e28a590f3d9d59645', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 20:33:31', '2018-12-20 20:33:31', '2019-12-20 15:33:31'),
('e51a81580d5b8a9ac1b03e82f383e01b9dcc808ba0b08058f089e045641bf5399bd954f1e0160a0c', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 16:01:37', '2018-12-20 16:01:37', '2019-12-20 11:01:37'),
('e756f5530ca33ffaccf3b07f59eb0eff68bf043090475eee866e762f1ecbd8526ee2bc9c222f2430', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 18:24:48', '2018-12-20 18:24:48', '2019-12-20 13:24:48'),
('e7917f9637a102fcca263d943b169dd9ff90d87994c8be848ffe75d4e05e6f2d5661abae4a1f3c8d', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 15:50:26', '2018-12-20 15:50:26', '2019-12-20 10:50:26'),
('e8500a196028d019ebb7317dd4cdfc7203f58741150d295bb570047e0e3a57a02701cf963d73a34c', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 15:42:18', '2018-12-20 15:42:18', '2019-12-20 10:42:18'),
('ea7c869d26efc3a8407e6e5289baeb2f949d82297447c119993eb4bb0594dc10363aec26c311a0f6', 13, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 21:06:21', '2018-12-20 21:06:21', '2019-12-20 16:06:21'),
('ec6466ed2d8c8942c26113891035230a058396ab381979512fb9cf812bc6637610c98f1ae764fad2', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 20:48:18', '2018-12-20 20:48:18', '2019-12-20 15:48:18'),
('ef207e9cc78e52a597e8dcbdb73ab577e260d4acd45ce5b850cdcc3b328b5d10be760b0c322cb53f', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 15:46:31', '2018-12-20 15:46:31', '2019-12-20 10:46:31'),
('f14d6441bfce7a36e4f90f8744c934988c6a0f339651236ab336f652147ff768a90572387a6baa72', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 15:52:34', '2018-12-20 15:52:34', '2019-12-20 10:52:34'),
('f25ee484bb278d662330ec1c83377c1d79a5b451ea35e63757ba4f496705cbb91ea807ed27dc7ad8', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 14:46:03', '2018-12-20 14:46:03', '2019-12-20 09:46:03'),
('f6457ac70dbd63b8f14e61c10bc432f0a24e6c27d3a976f162b0ef6f7884d1e84c646e6122d688fb', 5, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 16:54:01', '2018-12-20 16:54:01', '2019-12-20 11:54:01'),
('f7ab229e3f3c04cfdd57d120d956910bef22d117ccb6f4d91e78de57619a3e97601433d8972b049d', 9, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 20:49:56', '2018-12-20 20:49:56', '2019-12-20 15:49:56'),
('ff55dfb68320b95f9a9c280e1801d5e6eac1666c1753d7a3a9c262bcdc47b98e0ac46a6155631fe9', 3, 1, 'Laravel Password Grant Client', '[]', 0, '2018-12-20 16:52:46', '2018-12-20 16:52:46', '2019-12-20 11:52:46');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Laravel Personal Access Client', 'rs7DqNk4AIKeTTdu53RLqpnoc0AhQwh86rRhaInj', 'http://localhost', 1, 0, 0, '2018-12-19 19:34:03', '2018-12-19 19:34:03'),
(2, NULL, 'Laravel Password Grant Client', 'j6mxDy5TEzleaWyfpFavGsSjrQwPLsxJHg5115xA', 'http://localhost', 0, 1, 0, '2018-12-19 19:34:03', '2018-12-19 19:34:03');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` int(10) UNSIGNED NOT NULL,
  `client_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2018-12-19 19:34:03', '2018-12-19 19:34:03');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'gagi', 'dd2@gmail.com', NULL, '123456', NULL, '2018-12-19 19:34:22', '2018-12-19 19:34:22'),
(2, 'gagi', 'dd02@gmail.com', NULL, '123456', NULL, '2018-12-19 19:35:52', '2018-12-19 19:35:52'),
(3, 'gagi', 'd4d02@gmail.com', NULL, '123456', NULL, '2018-12-19 19:44:10', '2018-12-19 19:44:10'),
(4, 'test', 'test@gmail.com', NULL, '123456', NULL, '2018-12-20 16:20:14', '2018-12-20 16:20:14'),
(5, 'test', 'tesawdsst@gmail.com', NULL, '123dwadad456', NULL, '2018-12-20 16:54:01', '2018-12-20 16:54:01'),
(6, 'test', 'tesawadsst@gmail.com', NULL, '123dwadad456', NULL, '2018-12-20 18:24:48', '2018-12-20 18:24:48'),
(7, 'test', 'tesawaddsst@gmail.com', NULL, '123dwadad45d6', NULL, '2018-12-20 20:27:39', '2018-12-20 20:27:39'),
(8, 'test', 'tesawaddssst@gmail.com', NULL, '123dwadad45d6', NULL, '2018-12-20 20:48:28', '2018-12-20 20:48:28'),
(9, 'wwadwaaw', 'krsticnednad93@gmail.com', NULL, '123456', NULL, '2018-12-20 20:49:56', '2018-12-20 20:49:56'),
(10, 'matija', 'mat@gmail.com', NULL, '123456', NULL, '2018-12-20 20:53:10', '2018-12-20 20:53:10'),
(11, 'voja', 'voja@gmail.com', NULL, '123456', NULL, '2018-12-20 20:54:03', '2018-12-20 20:54:03'),
(12, 'Dragoslavv', 'dragoslavv@gmail.com', NULL, '123456', NULL, '2018-12-20 20:57:29', '2018-12-20 20:57:29'),
(13, 'awdadwwad', 'waagaw@gmail.com', NULL, '123456', NULL, '2018-12-20 21:06:21', '2018-12-20 21:06:21'),
(14, 'waddwawad', 'gagiewdwaaf@gmail.com', NULL, '123456', NULL, '2018-12-20 21:17:52', '2018-12-20 21:17:52');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_personal_access_clients_client_id_index` (`client_id`);

--
-- Indexes for table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
