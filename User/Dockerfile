#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 5262:5262

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY User.csproj User.csproj
RUN dotnet restore User.csproj
COPY . .
WORKDIR /src
RUN dotnet build User.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish User.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "User.dll"]