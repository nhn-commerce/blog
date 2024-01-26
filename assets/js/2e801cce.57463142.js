"use strict";(self.webpackChunktech_blog=self.webpackChunktech_blog||[]).push([[450],{6029:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"gateway","metadata":{"permalink":"/gateway","editUrl":"https://github.com/nhn-commerce/nhn-commerce.github.io/edit/main/blog/2024-01-25-gateway/index.md","source":"@site/blog/2024-01-25-gateway/index.md","title":"Spring Cloud Gateway \uc778\ucf54\ub529 \uc774\uc288 \ud68c\uace0","description":"\uc548\ub155\ud558\uc138\uc694. NHN COMMERCE \uac1c\ubc1c\uc790\uc785\ub2c8\ub2e4.","date":"2024-01-25T00:00:00.000Z","formattedDate":"January 25, 2024","tags":[{"label":"shopby","permalink":"/tags/shopby"},{"label":"godomall","permalink":"/tags/godomall"}],"readingTime":11.1,"hasTruncateMarker":false,"authors":[{"name":"Seowon Yun","title":"Devops Engineer","url":"https://github.nhnent.com/seowon-yun","imageURL":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Devops-toolchain.svg/1024px-Devops-toolchain.svg.png","key":"seowon"}],"frontMatter":{"slug":"gateway","title":"Spring Cloud Gateway \uc778\ucf54\ub529 \uc774\uc288 \ud68c\uace0","authors":["seowon"],"tags":["shopby","godomall"],"image":"https://miro.medium.com/v2/resize:fit:933/1*nOj3vVVLRDoBeyshUt2dlw.png","enableComments":true},"unlisted":false,"nextItem":{"title":"\uc81c\uac00 \uc81c\uc77c \uc798\uc0dd\uae34\uac70 \uac19\uc544\uc694!","permalink":"/2024/01/25/test"}},"content":"\uc548\ub155\ud558\uc138\uc694. NHN COMMERCE \uac1c\ubc1c\uc790\uc785\ub2c8\ub2e4.\\n\\nNHN\ucee4\uba38\uc2a4\uc5d0\uc11c\ub294 \ucd5c\uadfc [Spring Boot\uc758 EOL\uc774\uc288](https://endoflife.date/spring-boot)\\n\uc640 OpenTelemetry \ud638\ud658\uc131 \uc774\uc288\ub85c Spring Cloud Gateway\ub97c \uc5c5\uadf8\ub808\uc774\ub4dc \uacfc\uc815\uc5d0\uc11c \uacbd\ud5d8\ud55c\\n\uc774\uc288\ub4e4\uc744 \uacf5\uc720\ud558\uace0\uc790 \ud569\ub2c8\ub2e4.\\n\\n# Spring Boot \uc5c5\uadf8\ub808\uc774\ub4dc\\n\\n- 2.3.5.RELEASE -> 3.1.3\uc73c\ub85c \uc5c5\uadf8\ub808\uc774\ub4dc\\n- \uccab \uc5c5\uadf8\ub808\uc774\ub4dc \uc791\uc5c5 \ud6c4 \uc5ec\ub7ec\uac00\uc9c0 \uc778\ucf54\ub529 \uc774\uc288 \ubc1c\uc0dd\\n\\n## \ud55c\uae00 + \ub300\uad04\ud638 \uc778\ucf54\ub529 \uc774\uc288\\n\\n\uc1fc\ud551\ubab0 \ucfe0\ud3f0 \uac80\uc0c9\uc2dc \ud55c\uae00 + \ub300\uad04\ud638 \ud0a4\uc6cc\ub4dc \uac80\uc0c9\uc744 \ud558\uba74 \uac80\uc0c9 \ubd88\uac00 \ud604\uc0c1 \ubc1c\uc0dd\\n\\n![image](./1.png)\\n\\n\ud37c\uc13c\ud2b8 \uc778\ucf54\ub529\ub41c \ubb38\uc790\uc5f4 + \ub300\uad04\ud638\uac00 \uc788\ub294 \uacbd\uc6b0\uc5d0 \uac8c\uc774\ud2b8\uc6e8\uc774\uc5d0\uc11c \ub9c8\uc774\ud06c\ub85c\uc11c\ube44\uc2a4\ub85c\\n\ud3ec\uc6cc\ub529\ud558\uae30 \uc804\uc5d0 %\ub97c \ud55c\ubc88 \ub354 \uc778\ucf54\ub529\ud55c\ub2e4. ![filter](./2.png)\\n\\n- \ub300\uad04\ud638 + \uc601\uc5b4\uc778 \uacbd\uc6b0\uc5d0\ub294 \ubb38\uc81c\uac00 \uc5c6\ub2e4.\\n- \ub300\uad04\ud638 + \ud37c\uc13c\ud2b8 \uc778\ucf54\ub529\ub41c \ubb38\uc790\uc5f4\uc758 \uacbd\uc6b0 %\uac00 \ud55c\ubc88 \ub354 \uc778\ucf54\ub529`(%25)` \ub418\uc5b4\\n  \ub9c8\uc774\ud06c\ub85c\uc11c\ube44\uc2a4\ub85c \ub118\uaca8\uc9c4\ub2e4.\\n\\n\uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud558\ub294 \uc694\uccad \uc608\uc2dc:\\n\\n/xxx.com/coupons?keyword=**[%EC%BF%A0%EC%BF%A0%EC%BF%A0]**%ED%8F%AC%ED%8F%AC%ED%8F%B0\\n\\n### \uc6d0\uc778\\n\\nSpring Cloud Gateway\ub294 `RouteToRequestUrlFilter`\uc5d0\uc11c \uc694\uccad URI\uc774 \uc81c\ub300\ub85c \uc778\ucf54\ub529\\n\ub418\uc5b4\uc788\ub294\uc9c0 \uac80\uc99d\ud55c\ub2e4. \uc81c\ub300\ub85c \uc778\ucf54\ub529\uc774 \ub418\uc5b4\uc788\uc9c0 \uc54a\ub294\ub2e4\uba74 \uac15\uc81c\ub85c \uc778\ucf54\ub529\ud558\uc5ec URI\uc744\\n\uc218\uc815\ud55c\ub2e4.\\n\\n\ucffc\ub9ac \ud30c\ub77c\ubbf8\ud130\uc758 \uacbd\uc6b0\\n[RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986#section-3.4)\uc744\\n\ub9cc\uc871\uc2dc\ud0a4\ub294 \uacbd\uc6b0\uc5d0\ub9cc \uc778\ucf54\ub529\uc774 \ub418\uc5c8\ub2e4\uace0 \ud310\ub2e8\ud55c\ub2e4.\\n\\nRFC 3986\uc5d0\uc11c Query parameter\ub294 \ub2e4\uc74c\uc744 \ub9cc\uc871\uc2dc\ucf1c\uc57c \ud55c\ub2e4.\\n\\n- \uc54c\ud30c\ubcb3, \uc22b\uc790, `~`, `-`, `.`, `_` \uc740 \uadf8\ub300\ub85c \uc0ac\uc6a9\\n- SPACE(\uacf5\ubc31)\uc740 `+` \ub610\ub294 `%20`\uc73c\ub85c \uc778\ucf54\ub529 \ud574\uc57c \ud568.\\n- `+`\ub294 `%2B`\ub85c \uc778\ucf54\ub529 \ud574\uc57c \ud568.\\n- \uadf8 \uc678 \ub2e4\ub978 \ubaa8\ub4e0 \ubb38\uc790\ub4e4\uc740 %\uc778\ucf54\ub529\\n  - ASCII \ubb38\uc790\uc5f4\uc740 `%HH`\uc73c\ub85c \uc778\ucf54\ub529\\n  - ASCII\uac00 \uc544\ub2cc \ubb38\uc790\uc5f4\uc740 UTF-8\ub85c \uc778\ucf54\ub529 (`%HH%HH%HH`)\\n\\n### **RouteToRequestUrlFilter** \uc0c1\uc138 \ubd84\uc11d\\n\\nQueryParameter\uc758 \uacbd\uc6b0 `[`, `]` \uac00 \uc788\ub294 \uacbd\uc6b0 \uc778\ucf54\ub529\uc774 \uc548\ub418\uc5b4\uc788\ub2e4\uace0 \uac00\uc815\ud558\uace0\\n\uac15\uc81c\ub85c \uc778\ucf54\ub529\ud55c\ub2e4. \uadf8\ub798\uc11c \ud37c\uc13c\ud2b8 \uc778\ucf54\ub529\uacfc \ub300\uad04\ud638\uac00 \uac19\uc774 \ud3ec\ud568\ub41c \ucffc\ub9ac\ud30c\ub77c\ubbf8\ud130\uac00\\n\uc694\uccad\uc5d0 \ub4e4\uc5b4\uc62c \uacbd\uc6b0, **\uac8c\uc774\ud2b8\uc6e8\uc774\ub294 \uc778\ucf54\ub529\uc774 \uc548\ub418\uc5b4\uc788\ub2e4\uace0 \ud310\ub2e8\ud558\uace0 \uac15\uc81c\ub85c\\n\uc778\ucf54\ub529\ud558\uc5ec %\ub97c \ud55c\ubc88 \ub354 \uc778\ucf54\ub529\ud55c\ub2e4.**\\n\\n### \uadf8\ub0e5 \ub300\ucda9 \uc774\ub807\uac8c \ud558\uba74 \ub418\uc9c0 \uc54a\ub098..\\n\\n```kotlin\\n@Component\\nclass UriEncodeGlobalFilter: GlobalFilter, Ordered {\\n\\n    private fun String.manualEncode(): String {\\n        return this.replace(\\"[\\", \\"%5B\\")\\n            .replace(\\"]\\", \\"%5D\\")\\n    }\\n\\n    override fun filter(exchange: ServerWebExchange, chain: GatewayFilterChain): Mono<Void> {\\n        return with(exchange.request) {\\n            when (method) {\\n                HttpMethod.GET -> encode(exchange, chain)\\n                else -> chain.filter(exchange)\\n            }\\n        }\\n    }\\n\\n    private fun encode(exchange: ServerWebExchange, chain: GatewayFilterChain): Mono<Void> {\\n        val newQueryParams = LinkedMultiValueMap<String, String>()\\n\\n        exchange.request.queryParams.forEach { (key, values) ->\\n            val newValues = values.map { it.manualEncode() }\\n            newQueryParams[key] = newValues\\n        }\\n\\n        val newUri = UriComponentsBuilder.fromHttpRequest(exchange.request)\\n            .replaceQueryParams(newQueryParams)\\n            .build()\\n            .toUri()\\n\\n        return chain.filter(\\n            exchange.mutate().request(\\n                exchange.request.mutate().uri(newUri)\\n                    .build()\\n            ).build()\\n        )\\n    }\\n\\n    override fun getOrder(): Int {\\n        return Int.MIN_VALUE\\n    }\\n}\\n```\\n\\n- \uc0ac\uc2e4 `exchange.request.queryParams`\uc740 \uc694\uccad\ubc1b\uc740 \ucffc\ub9ac\ud30c\ub77c\ubbf8\ud130\ub97c \ub514\ucf54\ub529\ud55c \uac12\uc73c\ub85c\\n  \ubcc0\ud658\ub41c \uac12\uc784.\\n- `manualEncode()` \uba54\uc11c\ub4dc \ud574\ubd24\uc790 value\ub294 \uc774\ubbf8 \ub514\ucf54\ub529\ub41c \uac12\uc774\uae30 \ub54c\ubb38\uc5d0 \uc18c\uc6a9\uc5c6\ub2e4.\\n\\n### \ud574\uacb0 \ubc29\ubc95\\n\\nGlobalFilter\ub97c \ud558\ub098 \ub9cc\ub4e4\uc5b4\uc11c \ucffc\ub9ac\ud30c\ub77c\ubbf8\ud130\ub97c \ub514\ucf54\ub529\ud55c \uac83\uc744 \ub2e4\uc2dc \uc778\ucf54\ub529\ud574\uc11c URI\ub97c\\n\uc0c8\ub85c \ub9cc\ub4e4\uc5c8\ub2e4.\\n\\n```kotlin\\n@Component\\nclass UriEncodeGlobalFilter: GlobalFilter, Ordered {\\n\\n    /**\\n     * UriComponentsBuilder.fromUri\uc5d0\uc11c \ube4c\ub4dc\ud558\uba74 \uc790\ub3d9 \uc778\ucf54\ub529\uc774 \ub41c\ub2e4.\\n     * the components in the resulting builder will be in fully encoded (raw) form and further changes must also supply values that are fully encoded\\n     */\\n\\n    private fun encode(exchange: ServerWebExchange, chain: GatewayFilterChain): Mono<Void> {\\n        val newRequest = exchange.request.mutate().uri(\\n            UriComponentsBuilder.fromHttpRequest(exchange.request)\\n                .replaceQueryParams(exchange.request.queryParams)\\n                .encode()\\n                .build()\\n                .toUri()\\n        ).build()\\n\\n        return chain.filter(\\n            exchange.mutate().request(\\n                newRequest\\n            ).build()\\n        )\\n    }\\n\\n    override fun filter(exchange: ServerWebExchange, chain: GatewayFilterChain): Mono<Void> {\\n        return with(exchange.request) {\\n            when (method) {\\n                HttpMethod.GET -> encode(exchange, chain)\\n                else -> chain.filter(exchange)\\n            }\\n        }\\n    }\\n\\n    override fun getOrder(): Int {\\n        return Int.MIN_VALUE\\n    }\\n}\\n```\\n\\n## \uc0ac\uc774\ub4dc\uc774\ud399\ud2b8 1: \ud37c\uc13c\ud2b8 \uc778\ucf54\ub529\ub41c Path \ub354\ube14 \uc778\ucf54\ub529 \uc774\uc288\\n\\nUriEncodeGlobalFilter \uc801\uc6a9 \ud6c4 \ubc1c\uc0dd\ud558\ub294 \uc6d0\uc778\uc73c\ub85c \ud37c\uc13c\ud2b8 \uc778\ucf54\ub529\ub41c Path\uac00 \ub4e4\uc5b4\uc624\ub294\\n\uacbd\uc6b0 \uac8c\uc774\ud2b8\uc6e8\uc774\uc5d0\uc11c path\ub97c \ub354\ube14\uc778\ucf54\ub529\ud558\uc5ec \ub9c8\uc774\ud06c\ub85c\uc11c\ube44\uc2a4\uc5d0\uac8c \uc804\ub2ec\ub41c\ub2e4.\\n\\n### \uc6d0\uc778\\n\\n\ub514\ucf54\ub529\ub41c \ucffc\ub9ac\ud30c\ub77c\ubbf8\ud130\ub97c replace \ud6c4 encode()\ub85c URI\uc744 \uc804\uccb4 \uc778\ucf54\ub529\ud558\ub294\ub370, \ud37c\uc13c\ud2b8\\n\uc778\ucf54\ub529\ub41c Path\uac00 \ud55c\ubc88 \ub354 \uc778\ucf54\ub529\ub418\uc5b4 \ud37c\uc13c\ud2b8\uac00 \ub354\ube14\uc778\ucf54\ub529\ub41c\ub2e4.\\n\\n```kotlin\\nval newRequest = exchange.request.mutate().uri(\\n    UriComponentsBuilder.fromHttpRequest(exchange.request)\\n        .replaceQueryParams(exchange.request.queryParams)\\n        .encode() // \uc774\ubd80\ubd84\uc774 \ubb38\uc81c\\n        .build()\\n        .toUri()\\n).build()\\n```\\n\\n### \ud574\uacb0\\n\\npath \ub610\ud55c \ub514\ucf54\ub529\ub41c \uac83\uc73c\ub85c replace\ub97c \ud55c\ub2e4.\\n\\n```kotlin\\nval newRequest = exchange.request.mutate().uri(\\n    UriComponentsBuilder.fromHttpRequest(exchange.request)\\n        .replaceQueryParams(exchange.request.queryParams)\\n        .replacePath(exchange.request.uri.path)\\n        .encode() // \uc774\ubd80\ubd84\uc774 \ubb38\uc81c\\n        .build()\\n        .toUri()\\n).build()\\n```\\n\\n## \uc0ac\uc774\ub4dc\uc774\ud399\ud2b8 2: \uc778\ucf54\ub529\ub41c \uc911\uad04\ud638\\n\\n\uc911\uad04\ud638\ub85c \uac10\uc2f8\uc838\uc788\ub294 \ubb38\uc790\uc5f4\uc740 \uc778\ucf54\ub529\uc774 \uc548\ub41c\ub2e4.\\n\\n### \uc6d0\uc778\\n\\n- \uc2e4\uc81c\ub85c \ucffc\ub9ac\ud30c\ub77c\ubbf8\ud130\ub97c \uc778\ucf54\ub529\ud558\ub294 \ub85c\uc9c1\uc774\ub2e4. \ud574\uc11d\ud558\uba74 \uc911\uad04\ud638\ub85c \uac10\uc2f8\uc9c4 \ubb38\uc790\uc5f4\uc740\\n  \uc778\ucf54\ub529 \uc548\ud558\uaca0\ub2e4\ub294 \ub73b\uc784.\\n\\n### \ud574\uacb0\ubc29\ubc95\\n\\n\uc911\uad04\ud638\ub97c \uc778\ucf54\ub529\ud55c \ubb38\uc790\uc5f4\uc744 \ub514\ucf54\ub529 \ud6c4 \uc778\ucf54\ub529\ud560 \ub54c \uc608\uc678\uac00 \ubc1c\uc0dd\ud558\ub294 \uac83\uc774\uae30 \ub54c\ubb38\uc5d0\\n\ub514\ucf54\ub529 -> \uc778\ucf54\ub529\ud558\ub294 \uacfc\uc815\uc774 \uc788\uc73c\uba74 \uc548\ub41c\ub2e4. 3\ubc88 \ud574\uacb0\ubc29\uc2dd\uacfc \uac19\uc73c\ubbc0\ub85c \uc77c\ub2e8 \ud328\uc2a4\\n\\n## \uc0ac\uc774\ub4dc\uc774\ud399\ud2b8 3: + \ubb38\uc790\\n\\n`+` \ubb38\uc790\uc5f4\uc744 \uc778\ucf54\ub529\ud55c \uc0c1\ud0dc(`%2B`)\ub85c \uc694\uccad\uc744 \ud588\ub294\ub370 \uac8c\uc774\ud2b8\uc6e8\uc774\uc5d0\uc11c\\n\ub9c8\uc774\ud06c\ub85c\uc11c\ube44\uc2a4\ub85c \uc804\ub2ec\ud560 \ub54c\ub294 `+` \ubb38\uc790\uc5f4\ub85c \uc804\ub2ec\ub418\uc5b4 \uc2e4\uc81c \ub9c8\uc774\ud06c\ub85c\uc11c\ube44\uc2a4\uc5d0\uc11c\ub294\\n`+`\ub97c \ub514\ucf54\ub529\ud558\uc5ec \uacf5\ubc31(``)\uc73c\ub85c \ubc1b\uc74c.\\n\\n### \uc6d0\uc778\\n\\n\uac1c\ubc1c\ud55c \ud544\ud130\uc5d0\uc11c \ucffc\ub9ac\ud30c\ub77c\ubbf8\ud130\ub97c \ub514\ucf54\ub529\ud55c \uac83\uc744 `UriComponentsBuilder`\uac00 \ub2e4\uc2dc\\n\uc778\ucf54\ub529\ud574\uc11c \ubcf4\ub0b4\uc8fc\uae30 \ub54c\ubb38. `+` \ubb38\uc790\uc758 \ud2b9\uc218\uc131 \ub54c\ubb38\uc5d0 \uadf8\ub807\ub2e4.\\n\\n### UriComponentsBuilder\uac00 \uc778\ucf54\ub529 \ud558\ub294 \ubc29\uc2dd\\n\\n- `isPchar() == false`\uc778 \ubb38\uc790\uc5f4\ub9cc \ub530\ub85c \uc778\ucf54\ub529\ud55c\ub2e4.\\n\\n- \ud37c\uc13c\ud2b8 \uc778\ucf54\ub529\ub41c \ubb38\uc790\uc5f4\uc744 \uc81c\uc678\ud55c \ub098\uba38\uc9c0 \uc911\uc5d0\uc11c `+`\ub9cc \ub514\ucf54\ub529 \ud558\ub294 \uacbd\uc6b0\\n  **\uacf5\ubc31**\uc73c\ub85c \ubcc0\uacbd\ub41c\ub2e4.\\n\\n### \ud574\uacb0 \ubc29\ubc95\\n\\n`+` \ubb38\uc790\uc5f4 \ub54c\ubb38\uc5d0 \ud30c\ub77c\ubbf8\ud130\ub97c \uc784\uc758\ub85c \ub514\ucf54\ub529 \ud6c4 \ub2e4\uc2dc \uc778\ucf54\ub529\ud574\uc11c \ubcf4\ub0b4\uc8fc\uba74 \ubb38\uc81c\uac00\\n\ubc1c\uc0dd\ud55c\ub2e4. \uadf8\ub798\uc11c \ud544\ud130 \ub85c\uc9c1 \uc790\uccb4\ub97c \ubcc0\uacbd\ud574\uc57c \ud568.\\n\\n\ud574\uacb0 \ubc29\ubc95\uc740 rawQuery\ub97c \uac00\uc838\uc640\uc11c \uc774\uc804\uc5d0 \ubb38\uc81c\uac00 \ub418\uc5c8\ub358 \ub300\uad04\ud638(`[`, `]`)\ub97c \uc218\ub3d9\uc73c\ub85c\\n\uc778\ucf54\ub529\ud574\uc11c \ucffc\ub9ac\ud30c\ub77c\ubbf8\ud130\ub97c \ubcc0\uacbd\ud558\ub294 \uac83\uc73c\ub85c \ud568.\\n\\n- \ubc88\uc678\ub85c \uc911\uad04\ud638\ub3c4 \uc788\uc5b4\uc11c \uc911\uad04\ud638\ub3c4 \ucd94\uac00.\\n\\n```kotlin\\nprivate fun encode(exchange: ServerWebExchange, chain: GatewayFilterChain): Mono<Void> {\\n\\n    val newQuery = exchange.request.uri.rawQuery?.takeIf { it.isNotBlank() }\\n        ?.replace(\\"[\\", \\"%5B\\")\\n        ?.replace(\\"]\\", \\"%5D\\")\\n        ?.replace(\\"{\\", \\"%7B\\")\\n        ?.replace(\\"}\\", \\"%7D\\")\\n        .orEmpty()\\n\\n    val newRequest = exchange.request.mutate().uri(\\n        UriComponentsBuilder.fromHttpRequest(exchange.request)\\n            .replaceQuery(newQuery)\\n            .build(true)\\n            .toUri()\\n    ).build()\\n\\n    return chain.filter(\\n        exchange.mutate().request(\\n            newRequest\\n        ).build()\\n    )\\n}\\n```\\n\\n- `exchange.request.uri.query` \ub610\ub294 `exchange.request.queryParams`\uc740 \ub514\ucf54\ub529\ub41c\\n  \uac12\uc744 \uc77d\uc744 \ub54c \uc0ac\uc6a9\ud558\ub294 \uac83\\n- `exchange.request.rawQuery`\uac00 \uc2e4\uc81c\ub85c \ub4e4\uc5b4\uc628 \ucffc\ub9ac\ub2e4.\\n- \ub300\uad04\ud638\ub294 \uae30\ubcf8\uc801\uc73c\ub85c \uc778\ucf54\ub529\ub41c \ucc44\ub85c \ub4e4\uc5b4\uc640\uc57c \ud558\ub294\ub370, \uc6b0\ub9ac\ub294 \uc778\ucf54\ub529 \uc548\ub41c \ub300\uad04\ud638\ub97c\\n  \ubc1b\uc544\ub4e4\uc600\uae30 \ub54c\ubb38\uc5d0 \ubb38\uc81c\uac00 \ubc1c\uc0dd.\\n- \ud544\ud130\uc5d0\uc11c rawQuery\uac12\uc744 \ubc1b\uc544\uc640\uc11c `[`\ub294 `%5B`, `]`\ub294 `%5D`\ub85c \ubcc0\ud658\ud558\uc5ec \uc218\ub3d9\uc73c\ub85c\\n  \ub300\uad04\ud638\ub97c \uc778\ucf54\ub529\ud574\uc11c \ub118\uaca8\uc900\ub2e4.\\n- \uadf8\ub9ac\uace0 build(true)\ub85c \ud558\uba74 \uc774 \uac12\uc740 \uc778\ucf54\ub529\ub41c \uac12\uc73c\ub85c \uac04\uc8fc\ud558\ub294\ub370 \uc774\ub807\uac8c \uc8fc\uba74\\n  `RouteToRequestUrlFilter`\uc5d0\uc11c \ub530\ub85c \uc778\ucf54\ub529 \uac80\uc99d \ubc0f \ubcc0\ud658 \uacfc\uc815\uc744 \uc0dd\ub7b5\ud55c\ub2e4.\\n\\n## \ub300\uad04\ud638 \uc774\uc288 \uce5c\uad6c : = \ubb38\uc790\\n\\n\uc5d0\ub7ec\ub85c\uadf8\ub97c \ud655\uc778\ud574\ubcf4\ub2c8 \uc778\ucf54\ub529 \uc548\ub41c `=` \ubb38\uc790\ub3c4 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud55c\ub2e4. \ucffc\ub9ac\uc5d0\uc11c `=`\\n\ubb38\uc790\ub294 \ud2b9\uc218\ud55c \uc5ed\ud560\uc744 \ud558\ub294\ub370, \ubc14\ub85c key\uc640 value\ub97c \ub098\ub204\ub294 \uae30\uc900\uc744 \ub9e1\ub294 \ubb38\uc790\uc774\ub2e4.\\n\uadf8\ub798\uc11c value\uc5d0 `=` \ubb38\uc790\ub97c \ub123\uace0 \uc2f6\ub2e4\uba74 \uc778\ucf54\ub529\uc744 \ud574\uc57c \ud55c\ub2e4.\\n\\n\ud558\uc9c0\ub9cc \uc694\uccad\uc5d0 `=`\uc744 \uc778\ucf54\ub529\ud558\uc9c0 \uc54a\uace0 value\uc5d0 \ub123\uc5b4\uc11c \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud558\ub294 \uacbd\uc6b0\ub3c4\\n\ud655\uc778\ub418\uc5c8\ub2e4.\\n\\n### \uc6d0\uc778\\n\\n=\ub97c \uc778\ucf54\ub529\ud558\uc9c0 \uc54a\uace0 \ubcf4\ub0b4\ub294\uac8c \uc77c\ub2e8 \uc798\ubabb.\\n\\n### \ud574\uacb0\ubc29\ubc95\\n\\n=\uc740 \ubcf4\ud1b5\uc758 replace\ub85c\ub294 \uc218\ub3d9 \uc778\ucf54\ub529\uc774 \ubd88\uac00\ub2a5, rawQuery\ub97c \uc570\ud37c\uc13c\ud2b8 \uae30\uc900\uc73c\ub85c \ub098\ub204\uba74\\n\uc77c\ub828\uc758 key-value \uc30d\uc73c\ub85c \ubd84\ub9ac, \uac01 key-value \uc30d\uc5d0 \ub300\ud574 `=`\uc744 \uae30\uc900\uc73c\ub85c key, value\ub97c\\n\ub098\ub208 \ub2e4\uc74c key, value \uac01\uac01\uc5d0 \ub300\ud574 \uc218\ub3d9 \uc778\ucf54\ub529\\n\\n```kotlin\\nprivate fun String.manualEncode(): String {\\n    return this.replace(\\"[\\", \\"%5B\\")\\n        .replace(\\"]\\", \\"%5D\\")\\n        .replace(\\"=\\", \\"%3D\\")\\n}\\n```\\n\\n```kotlin\\nval newQuery = StringBuilder()\\n\\nexchange.request.uri.rawQuery?.takeIf { it.isNotBlank() }?.split(\\"&\\")?.forEach { keyAndValue ->\\n    val firstIndex = keyAndValue.indexOfFirst { it == \'=\' }\\n\\n    val key = keyAndValue.substring(0, firstIndex).manualEncode()\\n    val value = keyAndValue.substring(firstIndex + 1, keyAndValue.length).manualEncode()\\n\\n    newQuery.append(key)\\n        .append(\\"=\\")\\n        .append(value)\\n        .append(\\"&\\")\\n}\\n```\\n\\n### \ucffc\ub9ac\ud30c\ub77c\ubbf8\ud130 \ube48\uac12 \ucc98\ub9ac\\u001c\\n\\n\ucffc\ub9ac\ud30c\ub77c\ubbf8\ud130 \uc911\uc5d0 Key\uac12\ub9cc \uc804\ub2ec\ud558\ub294 \uacbd\uc6b0\ub3c4 \uc788\uc5b4\uc11c value\uac00 \uc5c6\ub294 \uacbd\uc6b0\uac00 \uc788\ub2e4. \uc774\\n\uacbd\uc6b0\uc5d0\ub294 StringIndexOutOfBoundException\uc774 \ubc1c\uc0dd.\\n\\n### \ud574\uacb0 \ubc29\ubc95\\n\\n\ube48\uac12 \uc608\uc678\ucc98\ub9ac\ub97c \ud55c\ub2e4.\\n\\n```kotlin\\n@Component\\nclass UriEncodeGlobalFilter: GlobalFilter, Ordered {\\n\\n    private fun String.manualEncode(): String {\\n        return this.replace(\\"[\\", \\"%5B\\")\\n            .replace(\\"]\\", \\"%5D\\")\\n            .replace(\\"=\\", \\"%3D\\")\\n    }\\n\\n    private fun encode(exchange: ServerWebExchange, chain: GatewayFilterChain): Mono<Void> {\\n\\n        val newQuery = StringBuilder()\\n\\n        exchange.request.uri.rawQuery?.takeIf { it.isNotBlank() }?.split(\\"&\\")?.forEach { keyAndValue ->\\n            val firstIndex = keyAndValue.indexOfFirst { it == \'=\' }\\n\\n            if (firstIndex == -1) {\\n                newQuery.append(keyAndValue)\\n                    .append(\\"&\\")\\n            } else {\\n                val key = keyAndValue.substring(0, firstIndex).manualEncode()\\n                val value = keyAndValue.substring(firstIndex + 1, keyAndValue.length).manualEncode()\\n\\n                newQuery.append(key)\\n                    .append(\\"=\\")\\n                    .append(value)\\n                    .append(\\"&\\")\\n            }\\n        }\\n\\n        newQuery.lastIndex.takeIf { it > 0 }?.also {\\n            newQuery.deleteCharAt(it)\\n        }\\n\\n        val newRequest = exchange.request.mutate().uri(\\n            UriComponentsBuilder.fromHttpRequest(exchange.request)\\n                .replaceQuery(newQuery.toString())\\n                .build(true)\\n                .toUri()\\n        ).build()\\n\\n        return chain.filter(\\n            exchange.mutate().request(\\n                newRequest\\n            ).build()\\n        )\\n    }\\n\\n\\n    override fun filter(exchange: ServerWebExchange, chain: GatewayFilterChain): Mono<Void> {\\n        return with(exchange.request) {\\n            when (method) {\\n                HttpMethod.GET -> encode(exchange, chain)\\n                else -> chain.filter(exchange)\\n            }\\n        }\\n    }\\n\\n    override fun getOrder(): Int {\\n        return Int.MIN_VALUE\\n    }\\n}\\n```\\n\\n## \uacb0\ub860\\n\\n- url encoding \uc2a4\ud399\uc5d0 \ub300\ud574\uc11c \ubbf8\ub9ac \ubbf8\ub9ac \uacf5\ubd80\ud574\uc57c\ud55c\ub2e4.\\n- \uc774\ubbf8 \uc5ce\uc9c8\ub7ec\uc9c4 \ubb3c\uc744 \uc5b4\ub5bb\uac8c \uc8fc\uc6cc\ub2f4\uc744\uc9c0 \uace0\ubbfc\uc774 \ud544\uc694."},{"id":"/2024/01/25/test","metadata":{"permalink":"/2024/01/25/test","editUrl":"https://github.com/nhn-commerce/nhn-commerce.github.io/edit/main/blog/2024-01-25-test/index.md","source":"@site/blog/2024-01-25-test/index.md","title":"\uc81c\uac00 \uc81c\uc77c \uc798\uc0dd\uae34\uac70 \uac19\uc544\uc694!","description":"","date":"2024-01-25T00:00:00.000Z","formattedDate":"January 25, 2024","tags":[],"readingTime":0,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"Spring Cloud Gateway \uc778\ucf54\ub529 \uc774\uc288 \ud68c\uace0","permalink":"/gateway"},"nextItem":{"title":"NHN\ucee4\uba38\uc2a4 \uae30\uc220 \ube14\ub85c\uadf8","permalink":"/welcome"}},"content":""},{"id":"welcome","metadata":{"permalink":"/welcome","editUrl":"https://github.com/nhn-commerce/nhn-commerce.github.io/edit/main/blog/2024-01-01-welcome.md","source":"@site/blog/2024-01-01-welcome.md","title":"NHN\ucee4\uba38\uc2a4 \uae30\uc220 \ube14\ub85c\uadf8","description":"\uc548\ub155\ud558\uc138\uc694. NHN\ucee4\uba38\uc2a4\uc758 \uae30\uc220\ube14\ub85c\uadf8\uc5d0 \uc624\uc2e0\uac83\uc744 \ud658\uc601\ud569\ub2c8\ub2e4.","date":"2024-01-01T00:00:00.000Z","formattedDate":"January 1, 2024","tags":[{"label":"shopby","permalink":"/tags/shopby"},{"label":"godomall","permalink":"/tags/godomall"}],"readingTime":0.825,"hasTruncateMarker":false,"authors":[{"name":"Haekyu Cho","title":"Director","url":"https://www.nhn-commerce.com","imageURL":"https://rarepepes.com/wp-content/uploads/2021/06/1424933369558.jpg","key":"haekyu"}],"frontMatter":{"slug":"welcome","title":"NHN\ucee4\uba38\uc2a4 \uae30\uc220 \ube14\ub85c\uadf8","authors":["haekyu"],"tags":["shopby","godomall"],"enableComments":true},"unlisted":false,"prevItem":{"title":"\uc81c\uac00 \uc81c\uc77c \uc798\uc0dd\uae34\uac70 \uac19\uc544\uc694!","permalink":"/2024/01/25/test"}},"content":"\uc548\ub155\ud558\uc138\uc694. NHN\ucee4\uba38\uc2a4\uc758 \uae30\uc220\ube14\ub85c\uadf8\uc5d0 \uc624\uc2e0\uac83\uc744 \ud658\uc601\ud569\ub2c8\ub2e4.\\n\\nCloud SaaS\uae30\ubc18\uc758 \ucee4\uba38\uc2a4 \ud50c\ub7ab\ud3fc\uc744 \uc11c\ube44\uc2a4\ud558\uace0 \uc788\uace0 \uc2dc\uc7a5\uc5d0\uc11c\ub294 \uc0f5\ubc14\uc774\uc640\\n\uace0\ub3c4\ubab0\uc774\ub77c\ub294 \ube0c\ub79c\ub4dc\ub85c \uc54c\ub824\uc838 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n\ucee4\uba38\uc2a4 \uac1c\ubc1c\ud300\uc740 \uc624\ud508\uc18c\uc2a4\ub97c \uae30\ubc18\uc73c\ub85c \uc11c\ube44\uc2a4\ub97c \uac1c\ubc1c&\uc6b4\uc601\ud558\uace0 \uc788\uc73c\uba70 \uc800\ud76c\uc758 \uacbd\ud5d8\uc744\\n\uacf5\uc720\ud558\uace0 \uac1c\ubc1c \ucee4\ubba4\ub2c8\ud2f0\uc640 \uc18c\ud1b5\ud558\uace0\uc790 \uae30\uc220 \ube14\ub85c\uadf8\ub97c \ub9cc\ub4e4\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4.\\n\\n\uc55e\uc73c\ub85c \ub9ce\uc740 \uad00\uc2ec \ubd80\ud0c1\ub4dc\ub9ac\uba70 \uc790\uc8fc \ube14\ub85c\uadf8\ub85c \uc18c\ud1b5\ud558\ub3c4\ub85d \ub178\ub825\ud558\uaca0\uc2b5\ub2c8\ub2e4."}]}')}}]);