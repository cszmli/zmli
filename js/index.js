/*******************************************
Author: Mariana Azevedo
Since: 06/08/2016
*******************************************/
(function (){

  var app = angular.module('app', []);

  app.controller('PageCtrl', function ($scope, $window) {

		$scope.articlesPublished = [
			{'name': '',
				'year': '',
				'language': '',
				'link': ''
			},
		];

  	    $scope.papersUVA = [
			{'name': 'Guided Dialog Policy Learning without Adversarial Learning in the Loop. ',
			'journal': 'Findings of EMNLP 2020',
			'author': 'Li, Z., Lee, S., Peng, B., Li, J., Kiseleva, J., de Rijke, M., Shayandeh, S., Gao, J.',
			'link': 'https://arxiv.org/abs/2004.03267v2' 
			},
			{'name': 'Rethinking Supervised Learning and Reinforcement Learning in Task-oriented Dialogue Systems. ',
			'journal': 'Findings of EMNLP 2020',
			'author': 'Li, Z., Kiseleva, J. & de Rijke, M.',
			'link': 'https://arxiv.org/abs/2009.09781' 
			},
			{'name': 'Optimizing Interactive Systems via Data-Driven Objectives. ',
			'journal': 'preprint',
			'author': 'Li, Z., Kiseleva, J., Agarwal A., de Rijke, M. & W. White R',
			'link': 'https://arxiv.org/abs/2006.12999' 
			},
			{'name': 'Dialogue generation: From imitation learning to inverse reinforcement learning. ',
			'journal': 'AAAI 2019',
			'author': 'Li, Z., Kiseleva, J. & de Rijke, M.',
			'link': 'https://arxiv.org/abs/1812.03509' 
			},
			{'name': 'Learning Data-Driven Objectives to Optimize Interactive Systems. ',
			'journal': 'LIRE workshop of NeurIPS 2019',
			'author': 'Li, Z., Kiseleva, Agarwal, A., J., de Rijke, M.',
			'link': 'https://arxiv.org/abs/1802.06306' 
			},
			{'name': 'The impact of linkage methods in hierarchical clustering for active learning to rank. ',
			'journal': 'SIGIR 2017',
			'author': 'Li, Z. & de Rijke, M. (2017). ',
			'link': 'https://dl.acm.org/citation.cfm?id=3080684' 
			},
			{'name': 'Towards learning reward functions from user interactions. ',
			'journal': 'ICTIR 2017',
			'author': 'Li, Z., Kiseleva, J., de Rijke, M. & Grotov, A.',
			'link': 'https://dl.acm.org/citation.cfm?id=3080684' 
			},	
		];

		$scope.papersXiamen = [
			{'name': 'Solving multidimensional 0-1 knapsack problem with time-free tissue p systems. ',
			'journal': 'Journal of Applied Mathematics.',
			'author': 'Liu, X., Li, Z., Suo, J., Ju, Y., Liu, J. & Zeng, X.'
			},
			{'name': 'A uniform solution to integer factorization using time-free spiking neural p system. ',
			'journal': 'Neural Computing and Applications',
			'author': 'Liu, X., Li, Z., Suo, J., Liu, J. & Min, X.'
			},
			{'name': 'Implementation of arithmetic operations with time-free spiking neural p systems. ',
			'journal': 'IEEE transactions on nanobioscience',
			'author': 'Liu, X., Li, Z., Liu, J., Liu, L. & Zeng, X.'
			},
		];

	  $scope.init = function(){
	  	$scope.callback();
	  };
	      
	  $scope.callback = function(){
			$('.item-skills').each(function(){
				newWidth = $(this).parent().width() * $(this).data('percent');
				$(this).width(0);
			    $(this).animate({
			        width: newWidth,
			    }, 1000);
				});
				$('.icons-blue').each(function(){
					height = $(this).height();
			    $(this).animate({
			        height: 14,
			    }, 2000);
			});
		};

		var resize;
		window.onresize = function() {
			clearTimeout(resize);
			resize = setTimeout(function(){
				$scope.callback();
			}, 100);
		};

		$scope.goToLinkedIn = function(){
			document.location.assign("https://www.linkedin.com/in/zmli/");
		};

		$scope.goToGithub = function(){
			document.location.assign("https://https://zimingli.info/");
		};

		$scope.sendMail = function(){
    		$window.location.href = "mailto:cszimingli@gmail.com";
		};
		

    $scope.downloadPaper = function(link){
    		$window.location.href = link;
    };

  });
  
})();