
/****** Object:  Table [dbo].[OccupationRating]    Script Date: 18-Aug-19 7:52:42 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[OccupationRating](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Rating] [nvarchar](100) NOT NULL,
	[Factor] [numeric](18, 2) NOT NULL CONSTRAINT [DF_OccupationRating_Factor]  DEFAULT ((0)),
 CONSTRAINT [PK_OccupationRating] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO



/****** Object:  Table [dbo].[Occupation]    Script Date: 18-Aug-19 7:53:05 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Occupation](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[OccupationType] [nvarchar](300) NOT NULL CONSTRAINT [DF_Occupation_Occupation]  DEFAULT (''),
	[RatingID] [int] NOT NULL,
 CONSTRAINT [PK_Occupation] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[Occupation]  WITH CHECK ADD  CONSTRAINT [FK__Occupatio__Ratin__398D8EEE] FOREIGN KEY([RatingID])
REFERENCES [dbo].[OccupationRating] ([ID])
GO

ALTER TABLE [dbo].[Occupation] CHECK CONSTRAINT [FK__Occupatio__Ratin__398D8EEE]
GO
